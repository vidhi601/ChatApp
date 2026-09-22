import express from 'express';
import dotenv from 'dotenv';
const app =express();

app.get('/' ,(req,res)=>{
    res.send("hello world vidhi chaudhary");

})

app.listen(3001,()=>{
    console.log('app listening on port number:http://localhost:3001');
})