import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Input from "./Input";
import Button from "./Button";
import Login from "./Login";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-pink-100 rounded-2xl shadow-xl p-8">

        <div className="text-center mb-7">
          <Heading/>
          <Paragraph/>
        </div>

        <div className="flex flex-col gap-4">
        <Input label="Full Name" placeholder="Enter your Full Name" type="text"/>
        <Input label=" Email" placeholder="Enter Your Email" type="email"/>
        <Input label="Password" placeholder="Enter your Password" type="password"/>
        
        <Input label="Confirm Password" placeholder="Confirm Your Password" type="password"/>
        <Button/>
        
        </div>

       <Login/>

      </div>
    </div>
  );
}

export default Signup;