# COS-Group-2 

This document outlines the quality assurance and testing process for the Job Board Web Application. It covers API test cases for all backend endpoints based on the application's data models.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [How to Test with Postman](#how-to-test-with-postman)
- [Base URL](#base-url)
- [API Test Cases](#api-test-cases)
  - [User Endpoints](#1-user-endpoints)
  - [Job Endpoints](#2-job-endpoints)
  - [Application Endpoints](#3-application-endpoints)
- [Bug Reporting](#bug-reporting)
- [Known Issues](#known-issues)

---

## Project Overview

COS-Group-2 is a Job Board Web Application that connects job seekers with employers. The platform allows employers to post job listings and manage applications, while job seekers can search and apply for jobs.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React (JavaScript) |
| Backend | Node.js / Express |
| Database | [To be confirmed by dev team] |
| Testing Tool | Postman |

---

## How to Test with Postman

1. Download and install **Postman** from [postman.com](https://postman.com)
2. Open Postman and click **"New"** → **"HTTP Request"**
3. Set the request type (GET, POST, PUT, DELETE) using the dropdown
4. Enter the full URL (Base URL + endpoint)
5. For POST/PUT requests, click **"Body"** → **"raw"** → select **"JSON"**
6. Paste in the request body and click **"Send"**
7. Check the response at the bottom

---

## Base URL

```
http://localhost:8000
```


---

## API Test Cases

### 1. User Endpoints

#### Register a New User
| Field | Details |
|-------|---------|
| Method | `POST` |
| URL | `/api/users/register` |
| Description | Creates a new user account |

**Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "password123",
  "role": "jobseeker"
}
```

| Test | Expected Result | Status |
|------|----------------|--------|
| Register with valid details | 201 Created, user object returned | ⬜ Not tested |
| Register with missing email | 400 Bad Request, error message | ⬜ Not tested |
| Register with duplicate email | 400 Bad Request, "email already exists" | ⬜ Not tested |
| Register with missing password | 400 Bad Request, error message | ⬜ Not tested |

---

#### Login
| Field | Details |
|-------|---------|
| Method | `POST` |
| URL | `/api/users/login` |
| Description | Logs in an existing user |

**Request Body:**
```json
{
  "email": "jane@example.com",
  "password": "password123"
}
```

| Test | Expected Result | Status |
|------|----------------|--------|
| Login with valid credentials | 200 OK, token returned | ⬜ Not tested |
| Login with wrong password | 401 Unauthorized, error message | ⬜ Not tested |
| Login with unregistered email | 404 Not Found, error message | ⬜ Not tested |
| Login with empty fields | 400 Bad Request, error message | ⬜ Not tested |

---

#### Get User Profile
| Field | Details |
|-------|---------|
| Method | `GET` |
| URL | `/api/users/:id` |
| Description | Retrieves a user's profile |

| Test | Expected Result | Status |
|------|----------------|--------|
| Get profile with valid ID | 200 OK, user details returned | ⬜ Not tested |
| Get profile with invalid ID | 404 Not Found, error message | ⬜ Not tested |

---

### 2. Job Endpoints

#### Get All Jobs
| Field | Details |
|-------|---------|
| Method | `GET` |
| URL | `/api/jobs` |
| Description | Returns a list of all job listings |

| Test | Expected Result | Status |
|------|----------------|--------|
| Get all jobs | 200 OK, array of jobs returned | ⬜ Not tested |
| Get jobs when none exist | 200 OK, empty array returned | ⬜ Not tested |

---

#### Get a Single Job
| Field | Details |
|-------|---------|
| Method | `GET` |
| URL | `/api/jobs/:id` |
| Description | Returns a single job listing by ID |

| Test | Expected Result | Status |
|------|----------------|--------|
| Get job with valid ID | 200 OK, job details returned | ⬜ Not tested |
| Get job with invalid ID | 404 Not Found, error message | ⬜ Not tested |

---

#### Create a Job
| Field | Details |
|-------|---------|
| Method | `POST` |
| URL | `/api/jobs` |
| Description | Creates a new job listing (employers only) |

**Request Body:**
```json
{
  "title": "Frontend Developer",
  "description": "We are looking for a React developer...",
  "location": "Lagos, Nigeria",
  "salary": "200000",
  "type": "Full-time"
}
```

| Test | Expected Result | Status |
|------|----------------|--------|
| Create job with valid details | 201 Created, job object returned | ⬜ Not tested |
| Create job with missing title | 400 Bad Request, error message | ⬜ Not tested |
| Create job with missing description | 400 Bad Request, error message | ⬜ Not tested |

---

#### Update a Job
| Field | Details |
|-------|---------|
| Method | `PUT` |
| URL | `/api/jobs/:id` |
| Description | Updates an existing job listing |

**Request Body:**
```json
{
  "title": "Senior Frontend Developer",
  "salary": "300000"
}
```

| Test | Expected Result | Status |
|------|----------------|--------|
| Update job with valid details | 200 OK, updated job returned | ⬜ Not tested |
| Update job with invalid ID | 404 Not Found, error message | ⬜ Not tested |

---

#### Delete a Job
| Field | Details |
|-------|---------|
| Method | `DELETE` |
| URL | `/api/jobs/:id` |
| Description | Deletes a job listing |

| Test | Expected Result | Status |
|------|----------------|--------|
| Delete job with valid ID | 200 OK, success message | ⬜ Not tested |
| Delete job with invalid ID | 404 Not Found, error message | ⬜ Not tested |

---

### 3. Application Endpoints

#### Apply for a Job
| Field | Details |
|-------|---------|
| Method | `POST` |
| URL | `/api/applications` |
| Description | Submits a job application |

**Request Body:**
```json
{
  "jobId": "job_id_here",
  "userId": "user_id_here",
  "coverLetter": "I am very interested in this role..."
}
```

| Test | Expected Result | Status |
|------|----------------|--------|
| Apply with valid details | 201 Created, application returned | ⬜ Not tested |
| Apply for a job that doesn't exist | 404 Not Found, error message | ⬜ Not tested |
| Apply for same job twice | 400 Bad Request, "already applied" | ⬜ Not tested |

---

#### Get All Applications for a Job
| Field | Details |
|-------|---------|
| Method | `GET` |
| URL | `/api/applications/job/:jobId` |
| Description | Returns all applications for a specific job |

| Test | Expected Result | Status |
|------|----------------|--------|
| Get applications for valid job ID | 200 OK, array of applications | ⬜ Not tested |
| Get applications for invalid job ID | 404 Not Found, error message | ⬜ Not tested |

---

#### Update Application Status
| Field | Details |
|-------|---------|
| Method | `PUT` |
| URL | `/api/applications/:id` |
| Description | Accepts or rejects an application |

**Request Body:**
```json
{
  "status": "accepted"
}
```

| Test | Expected Result | Status |
|------|----------------|--------|
| Accept application | 200 OK, updated status returned | ⬜ Not tested |
| Reject application | 200 OK, updated status returned | ⬜ Not tested |
| Update with invalid ID | 404 Not Found, error message | ⬜ Not tested |

---

## Bug Reporting

When you find a bug, create a **GitHub Issue** using this template:

```
**Bug Title:** Short description of the issue

**Endpoint:** (e.g. POST /api/users/register)

**Steps to Reproduce:**
1. Open Postman
2. Send request to...
3. See error

**Expected Result:** What should have happened

**Actual Result:** What actually happened

**Response Received:**
(paste the response from Postman here)

**Severity:** Critical / High / Medium / Low
```

### Severity Levels

| Level | Description |
|-------|-------------|
| 🔴 Critical | Server crashes or returns 500 errors |
| 🟠 High | Major feature not working (e.g. login broken) |
| 🟡 Medium | Feature works but with unexpected behaviour |
| 🟢 Low | Minor issue (e.g. wrong error message wording) |

---

## Known Issues

| Issue | Endpoint | Severity | Status |
|-------|----------|----------|--------|
| No known issues yet | - | - | - |

---

*Last updated: May  23 2026*
*QA: [Ryan Onaibre]*
