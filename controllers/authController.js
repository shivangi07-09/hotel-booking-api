const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Register User
exports.register = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        User.create(
            {
                name,
                email,
                password: hashedPassword,
                role
            },
            (err) => {
                if (err) {
                    return res.status(500).json({
                        message: "Registration Failed",
                        error: err
                    });
                }

                res.status(201).json({
                    message: "User Registered Successfully"
                });
            }
        );
    } catch (error) {
        res.status(500).json(error);
    }
};

// Login User
exports.login = (req, res) => {

    const { email, password } = req.body;

    User.findByEmail(email, async (err, results) => {

        if (err)
            return res.status(500).json(err);

        if (results.length === 0)
            return res.status(404).json({
                message: "User Not Found"
            });

        const user = results[0];

        const match = await bcrypt.compare(password, user.password);

        if (!match)
            return res.status(401).json({
                message: "Invalid Password"
            });

        const token = jwt.sign(

            {
                id: user.id,
                role: user.role
            },

            process.env.JWT_SECRET,

            {
                expiresIn: "1d"
            }

        );

        res.json({
            message: "Login Successful",
            token
        });

    });

};