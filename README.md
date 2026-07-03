# Hotel Booking API

A RESTful Hotel Booking API built using Node.js, Express.js, MySQL, and JWT Authentication.

## Features

- User Registration
- User Login
- JWT Authentication
- Hotel Management
- Room Management
- Booking Management
- MySQL Database Integration
- REST API
- Express.js Backend

## Technologies Used

- Node.js
- Express.js
- MySQL
- JWT
- bcrypt
- dotenv
- CORS

## Project Structure

```
hotel-booking-api
│
├── config
├── controllers
├── middleware
├── models
├── routes
├── server.js
├── package.json
└── README.md
```

## Installation

```bash
npm install
```

Create a `.env` file:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=hotel_booking
PORT=5000
JWT_SECRET=mysecretkey
```

Run the project:

```bash
node server.js
```

## API Endpoints

### Authentication

POST `/api/auth/register`

POST `/api/auth/login`

### Hotels

POST `/api/hotels`

GET `/api/hotels`

### Rooms

POST `/api/rooms`

GET `/api/rooms`

### Bookings

POST `/api/bookings`

GET `/api/bookings`

## Author

Shivangi Singh

## Internship

Backend Development Internship Project