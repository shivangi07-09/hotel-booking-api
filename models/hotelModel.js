const db = require("../config/db");

const Hotel = {

    create: (hotelData, callback) => {
        const sql = `
            INSERT INTO hotels (owner_id, hotel_name, location, description)
            VALUES (?, ?, ?, ?)
        `;

        db.query(
            sql,
            [
                hotelData.owner_id,
                hotelData.hotel_name,
                hotelData.location,
                hotelData.description
            ],
            callback
        );
    },

    getAll: (callback) => {
        const sql = "SELECT * FROM hotels";
        db.query(sql, callback);
    },

    getById: (id, callback) => {
        const sql = "SELECT * FROM hotels WHERE id = ?";
        db.query(sql, [id], callback);
    },

    update: (id, hotelData, callback) => {
        const sql = `
            UPDATE hotels
            SET hotel_name = ?, location = ?, description = ?
            WHERE id = ?
        `;

        db.query(
            sql,
            [
                hotelData.hotel_name,
                hotelData.location,
                hotelData.description,
                id
            ],
            callback
        );
    },

    delete: (id, callback) => {
        const sql = "DELETE FROM hotels WHERE id = ?";
        db.query(sql, [id], callback);
    }

};

module.exports = Hotel;