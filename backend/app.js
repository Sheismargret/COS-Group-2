import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import bcrypt from "bcrypt";
import { query } from "./database.js";

const app = express(); //create an express app

app.disable("x-powered-by");
app.set("trust proxy", 1);
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(",") : "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 500,
    standardHeaders: true,
    legacyHeaders: false,
  })
);
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: false, limit: "1mb" }));

const sendError = (res, status, message) =>
  res.status(status).json({ success: false, message });
const asyncHandler =
  (fn) =>
  async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const parsePositiveInt = (value) => {
  const parsed = Number.parseInt(value, 10);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
};

app.get("/health", async (_req, res) => {
  try {
    await query("SELECT NOW() as now");
    return res.status(200).json({ status: "ok", database: "connected", service: "job-board-api" });
  } catch (error) {
    return sendError(res, 500, `Database unavailable: ${error.message}`);
  }
});

app.get("/api/v1/users", asyncHandler(async (_req, res) => {
  const { rows } = await query(
    "SELECT id, full_name, email, role, created_at FROM users ORDER BY created_at DESC"
  );
  res.json({ success: true, data: rows });
}));

app.post("/api/v1/users", asyncHandler(async (req, res) => {
  const { fullName, email, password, role = "seeker" } = req.body;
  if (!fullName || fullName.trim().length < 2) return sendError(res, 400, "fullName must be at least 2 characters.");
  if (!email || !isValidEmail(email)) return sendError(res, 400, "A valid email is required.");
  if (!password || password.length < 8) return sendError(res, 400, "password must be at least 8 characters.");

  const passwordHash = await bcrypt.hash(password, 12);
  const { rows } = await query(
    `INSERT INTO users (full_name, email, password_hash, role)
     VALUES ($1, $2, $3, $4)
     RETURNING id, full_name, email, role, created_at`,
    [fullName.trim(), email.toLowerCase(), passwordHash, role]
  );
  res.status(201).json({ success: true, data: rows[0] });
}));

app.get("/api/v1/jobs", asyncHandler(async (_req, res) => {
  const { rows } = await query(
    `SELECT j.id, j.title, j.company_name, j.location, j.description, j.created_by, j.created_at,
            u.full_name AS creator_name
     FROM jobs j
     LEFT JOIN users u ON u.id = j.created_by
     ORDER BY j.created_at DESC`
  );
  res.json({ success: true, data: rows });
}));

app.post("/api/v1/jobs", asyncHandler(async (req, res) => {
  const { title, companyName, location = null, description, createdBy = null } = req.body;
  if (!title || title.trim().length < 3) return sendError(res, 400, "title must be at least 3 characters.");
  if (!companyName || companyName.trim().length < 2) return sendError(res, 400, "companyName is required.");
  if (!description || description.trim().length < 10) return sendError(res, 400, "description must be at least 10 characters.");

  const creatorId = createdBy === null ? null : parsePositiveInt(createdBy);
  if (createdBy !== null && !creatorId) return sendError(res, 400, "createdBy must be a positive integer.");

  const { rows } = await query(
    `INSERT INTO jobs (title, company_name, location, description, created_by)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING id, title, company_name, location, description, created_by, created_at`,
    [title.trim(), companyName.trim(), location, description.trim(), creatorId]
  );
  res.status(201).json({ success: true, data: rows[0] });
}));

app.get("/api/v1/applications", asyncHandler(async (_req, res) => {
  const { rows } = await query(
    `SELECT a.id, a.job_id, a.user_id, a.cover_letter, a.status, a.created_at,
            j.title AS job_title, u.full_name AS applicant_name
     FROM applications a
     JOIN jobs j ON j.id = a.job_id
     JOIN users u ON u.id = a.user_id
     ORDER BY a.created_at DESC`
  );
  res.json({ success: true, data: rows });
}));

app.post("/api/v1/applications", asyncHandler(async (req, res) => {
  const { jobId, userId, coverLetter = null, status = "pending" } = req.body;
  const parsedJobId = parsePositiveInt(jobId);
  const parsedUserId = parsePositiveInt(userId);
  if (!parsedJobId || !parsedUserId) return sendError(res, 400, "jobId and userId must be positive integers.");

  const { rows } = await query(
    `INSERT INTO applications (job_id, user_id, cover_letter, status)
     VALUES ($1, $2, $3, $4)
     RETURNING id, job_id, user_id, cover_letter, status, created_at`,
    [parsedJobId, parsedUserId, coverLetter, status]
  );
  res.status(201).json({ success: true, data: rows[0] });
}));

app.use((_req, res) => sendError(res, 404, "Route not found."));
app.use((error, _req, res, _next) => {
  if (error?.code === "23505") return sendError(res, 409, "Resource already exists.");
  if (error?.code === "23503") return sendError(res, 400, "Referenced record does not exist.");
  if (error?.code === "22P02") return sendError(res, 400, "Invalid value type.");
  console.error(error);
  return sendError(res, 500, "Internal server error.");
});

export default app;
