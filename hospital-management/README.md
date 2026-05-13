# Hospital Management System

A full-stack hospital management system built with React (frontend) and Spring Boot (backend).

## Project Structure

hospital-management/
├── frontend/    # React application
└── backend/     # Spring Boot application

## Features
- User registration and login
- View and book doctor appointments
- View and cancel appointments
- User profile and password management
- Admin portal to manage doctors, users and appointments

## Tech Stack

### Frontend
- React
- Redux
- Axios
- React Router
- Bootstrap

### Backend
- Spring Boot
- Spring Security
- Spring Data JPA
- MySQL
- BCrypt

## Getting Started

### Prerequisites
- Node.js
- Java 17+
- MySQL

### Run Backend
1. Create a MySQL database called `hospital`
2. Update `backend/src/main/resources/application.properties` with your DB credentials
3. Open backend in Spring Tool Suite and run as Spring Boot App

### Run Frontend
```bash
cd frontend
npm install
npm start
```

Frontend runs on `http://localhost:3000`  
Backend runs on `http://localhost:8080`

## API Endpoints

| Method | URL | Description | Auth Required |
|--------|-----|-------------|---------------|
| POST | /register | Register user | No |
| POST | /login | Login user | No |
| POST | /logout | Logout user | Yes |
| GET | /doctorList | Get all doctors | Yes |
| POST | /bookappointments | Book appointment | Yes |
| GET | /allAppointments/{id} | Get user appointments | Yes |
| DELETE | /appointments/{id} | Cancel appointment | Yes |
| GET | /user/{id} | Get user profile | Yes |
| PUT | /user/passwordChange/{id} | Change password | Yes |
