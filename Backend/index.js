import express from 'express';
import dotenv from 'dotenv';
const app =express();
app.use(express.json());

import userroutes from './routes/userroutes.js';
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
app.use('/user',userroutes)

app.get('/' ,(req,res)=>{
    res.send("hello world vidhi chaudhary");

})

app.listen(port,()=>{
    console.log(`server running on ${port}`);
})