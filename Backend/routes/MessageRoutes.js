import express from "express";
import { ProtectedRoute } from "../middleware/ProtectedRoute.js";
import {
  sendMessage,
  getMessages,
} from "../controller/messageController.js";

const router = express.Router();

router.post("/:id", ProtectedRoute, sendMessage);
router.get("/:id", ProtectedRoute, getMessages);

export default router;