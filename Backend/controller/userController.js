import { generateToken } from "../jwt/generateToken.js";
import user from "../models/user.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
        console.log("DATA FROM FRONTEND:", req.body);

    const { fullname, email, password, confirmPassword } = req.body;

    try {
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password do not match" });
        }

        const existinguser = await user.findOne({ email });

        if (existinguser) {
            return res.status(400).json({ error: "User already exist" });
        }
        const hashPassword = await bcrypt.hash(password,10);



        const newuser = new user({
            fullname,
            email,
            password:hashPassword,
            
        });

        await newuser.save();

        if(newuser){
            generateToken(newuser._id,res)
            res.status(201).json({
            message: "User registered successfully"
        });
                    }

        

    } catch (error) {
    console.log(error);
    res.status(500).json({
        error: "Something went wrong"
    });
}
};

export const login = async (req,res) =>{
    
    try {
        const{email,password}=req.body;
        const existinguser = await user.findOne({ email });
        if (!existinguser) {
    return res.status(400).json({
        error: "User not found"
    });
}
    const isMatch = await bcrypt.compare(password, existinguser.password);
    if (!isMatch) {
    return res.status(400).json({
        error: "Invalid password"
    });
}

generateToken(existinguser._id, res);
res.status(200).json({
    message: "Login successful"
});

        
    }  catch (error) {
    console.log(error);
    res.status(500).json({
        error: "server error"
    });
}
};

export const logout = async (req, res) => {
    try {
        res.clearCookie("token");

        res.status(200).json({
            message: "Logout successful"
        });
    } catch (error) {
        res.status(500).json({
            error: "Server error"
        });
    }
};