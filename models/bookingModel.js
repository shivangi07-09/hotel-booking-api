const db = require("../config/db");

const Booking = {

    create: (bookingData, callback) => {
        const sql = `
            INSERT INTO bookings
            (user_id, room_id, check_in, check_out)
            VALUES (?, ?, ?, ?)
        `;

        db.query(
            sql,
            [
                bookingData.user_id,
                bookingData.room_id,
                bookingData.check_in,
                bookingData.check_out
            ],
            callback
        );
    },

    getAll: (callback) => {
        const sql = "SELECT * FROM bookings";
        db.query(sql, callback);
    },

    getById: (id, callback) => {
        const sql = "SELECT * FROM bookings WHERE id = ?";
        db.query(sql, [id], callback);
    },

    delete: (id, callback) => {
        const sql = "DELETE FROM bookings WHERE id = ?";
        db.query(sql, [id], callback);
    }

};

module.exports = Booking;