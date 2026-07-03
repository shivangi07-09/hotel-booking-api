const Hotel = require("../models/hotelModel");

// Add Hotel
exports.createHotel = (req, res) => {

    Hotel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Failed to Add Hotel",
                error: err
            });
        }

        res.status(201).json({
            message: "Hotel Added Successfully"
        });

    });

};

// Get All Hotels
exports.getAllHotels = (req, res) => {

    Hotel.getAll((err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(results);

    });

};

// Get Hotel By ID
exports.getHotelById = (req, res) => {

    Hotel.getById(req.params.id, (err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(results);

    });

};

// Update Hotel
exports.updateHotel = (req, res) => {

    Hotel.update(req.params.id, req.body, (err) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Hotel Updated Successfully"
        });

    });

};

// Delete Hotel
exports.deleteHotel = (req, res) => {

    Hotel.delete(req.params.id, (err) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Hotel Deleted Successfully"
        });

    });

};