import express from 'express';
import dotenv from 'dotenv';
import "./jwt/generateToken.js";
import cors from "cors";
import cookieParser from 'cookie-parser';
import messageRoutes from "./routes/MessageRoutes.js";

const app =express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());




import userroutes from './routes/userroutes.js';
import mongoose from 'mongoose';
import dns from "dns";


dns.setServers(["8.8.8.8"]);

dotenv.config()
const port =process.env.PORT;
const MONGODB_URI=process.env.mongodb_url;

try {
  await mongoose.connect(MONGODB_URI);
  console.log("MongoDB connected successfully");
} catch (error) {
  console.error("MongoDB connection failed:", error.message);
}
app.use(cookieParser());

app.use('/user',userroutes)
app.use("/message", messageRoutes);

app.get('/' ,(req,res)=>{
    res.send("hello world vidhi chaudhary");

})

app.listen(port,()=>{
    console.log(`server running on ${port}`);
})