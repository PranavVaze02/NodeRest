# Node REST API – Express Implementation

# Part 1 – Node.js Learning Notes

## What I Did

I installed Node.js and completed the first two hours of the freeCodeCamp Node.js course. I focused on understanding:

- Modules (`require`, `module.exports`)
- Creating HTTP servers
- Asynchronous execution model
- npm package management

## Why It Works

Node.js runs JavaScript outside the browser using the V8 engine. It follows an event-driven, non-blocking I/O model, making it efficient for handling multiple requests. Express simplifies HTTP server creation by providing routing and middleware support.

## What I Learned

- How Node handles asynchronous operations
- How to build a basic HTTP server
- How middleware works in Express
- How to structure REST APIs using Express
- How npm manages dependencies

## 📌 Project Overview

This project demonstrates my ability to quickly learn and adapt to a new backend stack (Node.js + Express).

The API mirrors my previous Python Flask implementation and includes:

- GET /users → Retrieve all users
- POST /users → Add a new user
- Input validation
- Duplicate email prevention
- Consistent JSON response format
- Basic security improvement

---
---

# Part 2 – Build a Node REST API

## Technologies Used

- Node.js
- Express
- Postman (for testing)

---

## API Endpoints

### GET /users

Returns all users.

Response:
{
  "status": "success",
  "data": []
}

Status Code:
- 200 OK

---

### POST /users

Adds a new user.

Request Body (JSON):
{
  "name": "John",
  "email": "john@example.com"
}

Validation Rules:
- name is required
- email is required
- email must contain "@"
- duplicate emails are not allowed

Success Response:
- 201 Created

Error Response:
- 400 Bad Request

---

## How to Run the Project

1. Install dependencies:

   npm install

2. Start the server:

   node app.js

Server runs at:

   http://localhost:3000

---

# Part 3 – Compare & Improve

## Testing

The API was tested using Postman:

- GET request → verified user retrieval
- POST request → verified user creation
- Duplicate email → verified error handling

Screenshots of successful and validation test cases are included in the repository.

---

## Feature Ported from Python to Node

From the Flask implementation, I ported:

- Consistent JSON response format:
  {
    "status": "success" | "error",
    "data": ...
  }

- Duplicate email validation
- Proper HTTP status codes (200, 201, 400)

This ensures consistent behavior across both backend stacks.

---

## Python (Flask) vs Node.js (Express)

### Python (Flask)

Pros:
- Clean and readable syntax
- Easy for beginners
- Minimal setup required

Cons:
- Slightly less optimized for high concurrency
- Smaller ecosystem compared to npm

---

### Node.js (Express)

Pros:
- Non-blocking, event-driven architecture
- Excellent for scalable and real-time systems
- Massive npm ecosystem

Cons:
- Asynchronous patterns can be confusing initially
- Requires deeper understanding of JavaScript runtime

---

## Improvements Added in Node Version

- Implemented duplicate email validation
- Maintained consistent API response structure
- Added basic security middleware:

  X-Content-Type-Options: nosniff

This improves response security by preventing MIME-type sniffing.

---

# Repository Structure

NodeRest/
│── app.js
│── package.json
│── package-lock.json
│── README.md

---

# Project Status

✔ Node.js basics learned  
✔ REST API implemented using Express  
✔ Tested using Postman  
✔ Compared with Python implementation  
✔ Security improvement added  
