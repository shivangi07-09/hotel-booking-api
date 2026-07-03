const Booking = require("../models/bookingModel");

// Create Booking
exports.createBooking = (req, res) => {

    Booking.create(req.body, (err) => {

        if (err) {
            return res.status(500).json({
                message: "Booking Failed",
                error: err
            });
        }

        res.status(201).json({
            message: "Room Booked Successfully"
        });

    });

};

// Get All Bookings
exports.getAllBookings = (req, res) => {

    Booking.getAll((err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(results);

    });

};

// Get Booking By ID
exports.getBookingById = (req, res) => {

    Booking.getById(req.params.id, (err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(results);

    });

};

// Delete Booking
exports.deleteBooking = (req, res) => {

    Booking.delete(req.params.id, (err) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Booking Cancelled Successfully"
        });

    });

};