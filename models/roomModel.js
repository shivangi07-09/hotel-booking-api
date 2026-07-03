const db = require("../config/db");

const Room = {

    create: (roomData, callback) => {
        const sql = `
            INSERT INTO rooms
            (hotel_id, room_number, room_type, price, is_available)
            VALUES (?, ?, ?, ?, ?)
        `;

        db.query(
            sql,
            [
                roomData.hotel_id,
                roomData.room_number,
                roomData.room_type,
                roomData.price,
                roomData.is_available
            ],
            callback
        );
    },

    getAll: (callback) => {
        const sql = "SELECT * FROM rooms";
        db.query(sql, callback);
    },

    getById: (id, callback) => {
        const sql = "SELECT * FROM rooms WHERE id = ?";
        db.query(sql, [id], callback);
    },

    update: (id, roomData, callback) => {
        const sql = `
            UPDATE rooms
            SET room_number = ?, room_type = ?, price = ?, is_available = ?
            WHERE id = ?
        `;

        db.query(
            sql,
            [
                roomData.room_number,
                roomData.room_type,
                roomData.price,
                roomData.is_available,
                id
            ],
            callback
        );
    },

    delete: (id, callback) => {
        const sql = "DELETE FROM rooms WHERE id = ?";
        db.query(sql, [id], callback);
    }

};

module.exports = Room;