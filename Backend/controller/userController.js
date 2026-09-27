import user from "../models/user.js";

export const signup = async (req, res) => {
    const { fullname, email, password, confirmPassword } = req.body;

    try {
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password do not match" });
        }

        const existinguser = await user.findOne({ email });

        if (existinguser) {
            return res.status(400).json({ error: "User already exist" });
        }

        const newuser = new user({
            fullname,
            email,
            password,
            confirmPassword
        });

        await newuser.save();

        res.status(201).json({
            message: "User registered successfully"
        });

    } catch (error) {
        res.status(500).json({
            error: "Something went wrong"
        });
    }
};