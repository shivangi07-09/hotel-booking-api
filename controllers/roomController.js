const Room = require("../models/roomModel");

// Add Room
exports.createRoom = (req, res) => {

    Room.create(req.body, (err) => {

        if (err) {
            return res.status(500).json({
                message: "Failed to Add Room",
                error: err
            });
        }

        res.status(201).json({
            message: "Room Added Successfully"
        });

    });

};

// Get All Rooms
exports.getAllRooms = (req, res) => {

    Room.getAll((err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(results);

    });

};

// Get Room By ID
exports.getRoomById = (req, res) => {

    Room.getById(req.params.id, (err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(results);

    });

};

// Update Room
exports.updateRoom = (req, res) => {

    Room.update(req.params.id, req.body, (err) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Room Updated Successfully"
        });

    });

};

// Delete Room
exports.deleteRoom = (req, res) => {

    Room.delete(req.params.id, (err) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Room Deleted Successfully"
        });

    });

};