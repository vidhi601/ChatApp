
import jwt from "jsonwebtoken";
import user from "../models/user.js";

export const protectRoute = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized - No Token Provided",
    });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = await user
      .findById(decoded.userId)
      .select("-password");

    if (!req.user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized - Invalid Token",
    });
  }
};
