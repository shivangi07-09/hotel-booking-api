const express = require("express");
const router = express.Router();

const {
    createBooking,
    getAllBookings,
    getBookingById,
    deleteBooking
} = require("../controllers/bookingController");

// Create Booking
router.post("/", createBooking);

// Get All Bookings
router.get("/", getAllBookings);

// Get Booking By ID
router.get("/:id", getBookingById);

// Delete Booking
router.delete("/:id", deleteBooking);

module.exports = router;