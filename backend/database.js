import pg from "pg";

const { Pool } = pg;

let pool;

const getPool = () => {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error("Missing DATABASE_URL in environment variables.");
    }

    pool = new Pool({
      connectionString,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
    });
  }
  return pool;
};

const connectDB = async () => {
  const dbPool = getPool();
  const client = await dbPool.connect();
  try {
    await client.query("SELECT 1");
    console.log("PostgreSQL connected");
  } finally {
    client.release();
  }
};

export const initializeDatabase = async () => {
  const dbPool = getPool();
  await dbPool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      full_name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      role TEXT DEFAULT 'seeker',
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
    CREATE UNIQUE INDEX IF NOT EXISTS idx_users_email_unique ON users (email);

    CREATE TABLE IF NOT EXISTS jobs (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      company_name TEXT NOT NULL,
      location TEXT,
      description TEXT NOT NULL,
      created_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS idx_jobs_created_at ON jobs (created_at DESC);

    CREATE TABLE IF NOT EXISTS applications (
      id SERIAL PRIMARY KEY,
      job_id INTEGER NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      cover_letter TEXT,
      status TEXT DEFAULT 'pending',
      created_at TIMESTAMPTZ DEFAULT NOW(),
      UNIQUE (job_id, user_id)
    );
    CREATE INDEX IF NOT EXISTS idx_applications_user_id ON applications (user_id);
    CREATE INDEX IF NOT EXISTS idx_applications_job_id ON applications (job_id);
  `);
};

export const query = (text, params = []) => getPool().query(text, params);
export const closePool = async () => {
  if (pool) {
    await pool.end();
    pool = null;
  }
};

export default connectDB;
