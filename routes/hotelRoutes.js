const express = require("express");
const router = express.Router();

const {
    createHotel,
    getAllHotels,
    getHotelById,
    updateHotel,
    deleteHotel
} = require("../controllers/hotelController");

// Add Hotel
router.post("/", createHotel);

// Get All Hotels
router.get("/", getAllHotels);

// Get Hotel By ID
router.get("/:id", getHotelById);

// Update Hotel
router.put("/:id", updateHotel);

// Delete Hotel
router.delete("/:id", deleteHotel);

module.exports = router;