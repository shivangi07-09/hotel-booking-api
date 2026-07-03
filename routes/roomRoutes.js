const express = require("express");
const router = express.Router();

const {
    createRoom,
    getAllRooms,
    getRoomById,
    updateRoom,
    deleteRoom
} = require("../controllers/roomController");

// Add Room
router.post("/", createRoom);

// Get All Rooms
router.get("/", getAllRooms);

// Get Room By ID
router.get("/:id", getRoomById);

// Update Room
router.put("/:id", updateRoom);

// Delete Room
router.delete("/:id", deleteRoom);

module.exports = router;