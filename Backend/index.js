import express from 'express';
import dotenv from 'dotenv';
const app =express();
import mongoose from 'mongoose';
import dns from "dns";


dns.setServers(["8.8.8.8"]);

dotenv.config()
const port =process.env.PORT;
const MONGODB_URI=process.env.mongodb_url;

try {
    mongoose.connect(MONGODB_URI)
    console.log("connect with database");
} catch (error) {
    console.log(error)
    
}

app.get('/' ,(req,res)=>{
    res.send("hello world vidhi chaudhary");

})

app.listen(port,()=>{
    console.log(`server running on ${port}`);
})