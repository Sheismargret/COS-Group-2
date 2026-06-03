# PAU Connect – QA Documentation

**Live Application:** [https://cos-group-2.vercel.app](https://cos-group-2.vercel.app)

PAU Connect is a Job Board Web Application that connects job seekers with employers. Built with React on the frontend and Node.js/Express on the backend, it provides a fast, responsive, and seamless experience across all devices.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Live Application](#live-application)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Features](#features)
- [Testing](#testing)
  - [Frontend Test Cases](#frontend-test-cases)
  - [Backend API Test Cases](#backend-api-test-cases)
- [Bug Reporting](#bug-reporting)
- [Resolved Issues](#resolved-issues)
- [Known Issues](#known-issues)
- [Future Enhancements](#future-enhancements)
- [Contributors](#contributors)

---

## Project Overview

PAU Connect is a Job Board Web Application that allows:
- **Employers** to post, manage, and review applications for job listings
- **Job Seekers** to search, filter, and apply for jobs

The frontend follows a Single Page Application (SPA) approach using React, providing a fast and seamless user experience without full page reloads.

---

## Live Application

| Environment | URL |
|-------------|-----|
| Frontend (Production) | [https://cos-group-2.vercel.app](https://cos-group-2.vercel.app) |
| Backend API | `http://localhost:8000` (local) |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js, React Router DOM, CSS |
| Backend | Node.js, Express.js |
| Database | PostgreSQL |
| Deployment | Vercel (Frontend) |
| Testing |  Manual (UI) |
| Version Control | Git / GitHub |

---

## Project Structure

```
COS-Group-2/
├── frontend/              # React frontend application
│   └── src/
│       ├── components/    # Reusable UI components
│       ├── pages/         # Application pages
│       ├── styles/        # CSS stylesheets
│       └── App.js         # Main app entry point
└── backend/               # Node.js backend API
    └── src/
        ├── config/        # App configuration
        ├── models/        # Database models
        │   ├── User.js
        │   ├── Job.js
        │   └── Application.js
        ├── app.js         # Express app setup
        └── index.js       # Server entry point
```

---

## Getting Started

### Frontend Setup

1. Navigate to the frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the frontend folder:
```
REACT_APP_API_URL=https://your-deployed-backend-url.com
```

4. Start the development server:
```bash
npm start
```

5. Open your browser at:
```
http://localhost:3000
```

---

### Backend Setup

1. Navigate to the backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend folder:
```
NODE_ENV=production
DATABASE_URL=postgresql://<user>:<password>@<host>/<database>?sslmode=require
CORS_ORIGIN=https://cos-group-2.vercel.app
PORT=8000
```

4. Start the server:
```bash
node index.js
```

5. Server will run at:
```
http://localhost:8000
```

---




### Frontend `.env`

| Variable | Description |
|----------|-------------|
| `REACT_APP_API_URL` | URL of the deployed backend API |

### Backend `.env`

| Variable | Description |
|----------|-------------|
| `NODE_ENV` | Environment (development/production) |
| `DATABASE_URL` | PostgreSQL connection string |
| `CORS_ORIGIN` | Allowed frontend URL for CORS |
| `PORT` | Port the server runs on (default: 8000) |

---

## Features

- User registration and login for job seekers and employers
- Employer job posting, editing, and deletion
- Job search and filtering by location, type, and salary
- Job application submission and management
- Application status updates (accept/reject)
- Responsive design for mobile, tablet, and desktop
- Cross-browser compatibility
- Progressive Web App (PWA) support

---

## Testing

### Frontend Test Cases

> Test the live app at: [https://cos-group-2.vercel.app](https://cos-group-2.vercel.app)

#### General

| Test | Expected Result | Status |
|------|----------------|--------|
| App loads without errors | Homepage displays correctly |tested works|
| No blank white screen on load | Content is visible immediately |tested works|
| Browser console has no red errors | Console shows no errors |tested works|
| Page title shows "PAU Connect" | Tab shows correct app name |tested works|

#### Navigation

| Test | Expected Result | Status |
|------|----------------|--------|
| Navbar is visible on all pages | Navbar shows on every page |tested works|
| Clicking logo goes to home | Redirects to homepage |tested works|
| All navbar links work | Each link goes to correct page |tested works|
| No broken links | No 404 pages |tested works|

#### Login Page

| Test | Expected Result | Status |
|------|----------------|--------|
| Login form loads correctly | Email and password fields visible |tested works|
| Login with valid credentials | User logged in, redirected to dashboard |tested works|
| Login with wrong password | Error message displayed |tested works|
| Login with empty fields | Validation error shown |tested works|
| Login with invalid email format | Validation error shown |tested works|

#### Register Page

| Test | Expected Result | Status |
|------|----------------|--------|
| Registration form loads correctly | All fields visible |tested works|
| Register with valid details | Account created successfully |tested works|
| Register with missing fields | Validation error shown |tested works|
| Register with existing email | "Email already exists" error shown |tested works| 

#### Job Listings Page

| Test | Expected Result | Status |
|------|----------------|--------|
| Job listings load correctly | List of jobs displayed |tested works|
| Each job card shows correct info | Title, company, location visible | tested works|
| Search by keyword works | Relevant results shown |tested works|
| Filter by location works | Correct jobs shown | tested works|
| Clicking a job opens details | Job details page loads | tested works|

#### Responsive Design

| Device | Screen Size | Expected Result | Status |
|--------|------------|----------------|--------|
| Desktop | 1920x1080 | Full layout displayed |tested works|
| Tablet | 768x1024 | Layout adjusts correctly | tested works|
| Mobile | 375x667 | Layout stacks vertically | tested works|

#### Cross-Browser Compatibility

| Browser | Expected Result | Status |
|---------|----------------|--------|
| Google Chrome | App works correctly | tested works|
| Mozilla Firefox | App works correctly | tested works|
| Microsoft Edge | App works correctly | tested works|
| Safari | App works correctly | tested works|

---

### Backend API Test Cases

**Base URL:** `http://localhost:8000`

#### User Endpoints

| Test | Method | Endpoint | Expected Result | Status |
|------|--------|----------|----------------|--------|
| Register with valid details | POST | `/api/users/register` | 201 Created | tested works|
| Register with duplicate email | POST | `/api/users/register` | 400 Bad Request | tested works|
| Login with valid credentials | POST | `/api/users/login` | 200 OK, token returned | 
| Login with wrong password | POST | `/api/users/login` | 401 Unauthorized | tested works|
| Get user profile | GET | `/api/users/:id` | 200 OK, user details | tested works|

#### Job Endpoints

| Test | Method | Endpoint | Expected Result | Status |
|------|--------|----------|----------------|--------|
| Get all jobs | GET | `/api/jobs` | 200 OK, array of jobs | tested works|
| Get single job | GET | `/api/jobs/:id` | 200 OK, job details | tested works|
| Create a job | POST | `/api/jobs` | 201 Created | tested works|
| Update a job | PUT | `/api/jobs/:id` | 200 OK, updated job | tested works|
| Delete a job | DELETE | `/api/jobs/:id` | 200 OK, success message | tested works|

#### Application Endpoints

| Test | Method | Endpoint | Expected Result | Status |
|------|--------|----------|----------------|--------|
| Apply for a job | POST | `/api/applications` | 201 Created | tested works|
| Get applications for a job | GET | `/api/applications/job/:jobId` | 200 OK, array | tested works|
| Accept/reject application | PUT | `/api/applications/:id` | 200 OK, updated status | tested works|

---

## Bug Reporting

**Bug Title:** Login fails with "Failed to fetch" error

**Page/Endpoint:** Login Page

**Steps to Reproduce:**
1. Go to https://cos-group-2.vercel.app/login
2. Enter valid email and password
3. Click the Login button
4. See error

**Expected Result:** User is logged in and redirected to dashboard

**Actual Result:** "Failed to fetch" error message displayed, login does not work

**Root Cause:** Frontend .env file was pointing to localhost backend
instead of the deployed backend URL. Since localhost was not active,
all API calls were failing.

**Device/Browser:** Chrome, Windows 11

**Severity:** 🔴 Critical

**Status:** ✅ Resolved — Updated REACT_APP_API_URL in frontend .env 
to point to the correct deployed backend URL



### Severity Levels

| Level | Description |
|-------|-------------|
| 🔴 Critical | App crashes or is completely unusable |
| 🟠 High | Major feature is broken (e.g. login not working) |
| 🟡 Medium | Feature works but behaves unexpectedly |
| 🟢 Low | Minor UI or cosmetic issue |

---

## Resolved Issues

| Issue | Cause | Fix | Status |
|-------|-------|-----|--------|
| Login failed with "Failed to fetch" error | Frontend `.env` was pointing to `localhost` backend instead of the deployed backend URL | Updated `REACT_APP_API_URL` in the frontend `.env` to point to the correct deployed backend URL | ✅ Resolved |

---

## Known Issues

| Issue | Page/Endpoint | Severity | Status |
|-------|--------------|----------|--------|
| No known issues at this time | - | - | - |

---

## Future Enhancements

- Email notifications for application status updates
- Improved UI design and accessibility
- Expanded search and filter functionality
- Enhanced security with JWT token refresh
- Expanded Progressive Web App capabilities

---

## Contributors

| Name | Role |
|------|------|
| [EMMANUEL, Daniel and ARAYELA, Oluwayanmife] | Frontend Developer |
| [EKE, Chinedum and DUROJAIYE, Muhammad] | Backend Developer |
| [ONAIBRE, Ryan and EZEANI, Onyinyechukwu] | QA / Testing |


---

*Last updated: May 2026*

