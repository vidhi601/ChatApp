import Message from "../models/message.js";
import User from "../models/user.js";


export const sendMessage = async (req, res) => {
  try {
    const { text } = req.body;
    const receiverId = req.params.id;
    const senderId = req.user._id;

    if (!text || !text.trim()) {
      return res.status(400).json({
        message: "Message cannot be empty",
      });
    }

    const receiver = await User.findById(receiverId);

    if (!receiver) {
      return res.status(404).json({
        message: "Receiver not found",
      });
    }

    const message = await Message.create({
      sender: senderId,
      receiver: receiverId,
      text: text.trim(),
    });

    return res.status(201).json(message);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to send message",
    });
  }
};


export const getMessages = async (req, res) => {
  try {
    const receiverId = req.params.id;
    const senderId = req.user._id;

    const messages = await Message.find({
      $or: [
        { sender: senderId, receiver: receiverId },
        { sender: receiverId, receiver: senderId },
      ],
    }).sort({ createdAt: 1 });

    return res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to fetch messages",
    });
  }
};