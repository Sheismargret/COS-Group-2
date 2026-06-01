# Deployment Guide

This project is split into two deployments:

- `backend/` on Render
- `frontend/` on Vercel

## Backend on Render

1. Create a new **Web Service** in Render.
2. Set the **Root Directory** to `backend`.
3. Use these commands:
   - Build: `npm install`
   - Start: `npm start`
4. Add environment variables:
   - `DATABASE_URL` — your Render Postgres connection string
   - `CORS_ORIGIN` — your Vercel app URL, for example `https://your-frontend.vercel.app`
   - `NODE_ENV` — `production`
5. Deploy and verify `GET /health` returns success.

## Frontend on Vercel

1. Import the repo into Vercel.
2. Set the **Root Directory** to `frontend`.
3. Let Vercel use the default build settings, or set:
   - Build Command: `npm run build`
   - Output Directory: `build`
4. The included `frontend/vercel.json` keeps React Router routes working on refresh.

## Important Notes

- The frontend now talks to the backend for login, registration, job browsing, and job posting.
- Add `REACT_APP_API_URL` in Vercel and point it at the Render backend URL.
- If you want, I can add edit/delete flows and profile persistence next.
