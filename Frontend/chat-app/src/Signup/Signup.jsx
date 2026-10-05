import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Input from "./Input";
import Button from "./Button";
import Login from "./Login";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useNavigate } from "react-router-dom";


function Signup() {

  const navigate = useNavigate();
  const [formdata,setformdata]=useState({
    fullname:"",
    email:"",
    password:"",
    confirmPassword:""
  });

  const handleChange = (e) =>{

    const{name,value} = e.target;
     



    setformdata({
      ...formdata,
      [name]:value
    })
  };

  const handleSignup = async () => {
      alert("handleSignup called");

    const response = await fetch("http://localhost:3004/user/signup",{
      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formdata)


    })

    const data =  await response.json();

    alert(data.message);

    
     
 
};
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-pink-100 rounded-2xl shadow-xl p-8">

        <div className="text-center mb-7">
          <Heading/>
          <Paragraph/>
        </div>

        <div className="flex flex-col gap-4">
        <Input label="Full Name" placeholder="Enter your Full Name" type="text" name="fullname"   onChange={handleChange}
/>
        <Input label=" Email" placeholder="Enter Your Email" type="email" name="email" onChange={handleChange}/>
        <Input label="Password" placeholder="Enter your Password" type="password" name="password" onChange={handleChange}/>
        
        <Input label="Confirm Password" placeholder="Confirm Your Password" type="password"name="confirmPassword" onChange={handleChange}/>
        <Button onClick={handleSignup}/>
        
        </div>

       <Login/>

      </div>
    </div>
  );
}

export default Signup;