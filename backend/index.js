import dotenv from "dotenv";
dotenv.config();

import connectDB from "./database.js";
import { initializeDatabase } from "./database.js";
import { closePool } from "./database.js";
import app from "./app.js"; 

const PORT = Number(process.env.PORT) || 8000;

const startServer = async () => {
  try {
    await connectDB();
    await initializeDatabase();

    const server = app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });

    app.on("error", (error) => {
      console.error("APP_ERROR", error);
      throw error;
    });

    const shutdown = async (signal) => {
      console.log(`${signal} received. Starting graceful shutdown...`);
      server.close(async () => {
        await closePool();
        console.log("HTTP server closed. Database pool closed.");
        process.exit(0);
      });
    };

    process.on("SIGTERM", () => shutdown("SIGTERM"));
    process.on("SIGINT", () => shutdown("SIGINT"));
  } catch (err) {
    console.log("PostgreSQL connection failed!!", err);
    process.exit(1);
  }
};

startServer();
