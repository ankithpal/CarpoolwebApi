import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import axios from  'axios';
import { useState } from 'react';
import "./signupform.scss";


export const SignUpForm = () => {
  
   let [email , setEmail] = useState<string>('');
   let [password , setPassword] = useState<string>('');
   let [conformPassword , setConformPassword] = useState<string>('');

   const signUpUser= async (e : any)=>{
       e.preventDefault();
      try{
        if(password == conformPassword){
          const res = await axios.post("https://localhost:7256/signup",{
            "id": 0,
            "name": "ankith",
            "phoneNo": "9738529",
            "email": email,
            "password": password
          })
          
           res &&  window.location.replace('/login'); 
        }else{
            console.log("password not matching...");
        }
        }catch(err){
            console.log(err); 
       }
   }
  return (
    <div
      className={`signupform d-flex align-items-center justify-content-center w-100 orange-shade-bg`}>
      <div className="inner-signupform  h-100 mt-5 d-flex flex-column align-items-center justify-content-center">
        <div className="signup-header d-flex align-items-center justify-content-center">
           <h1>Sign Up</h1>
        </div>
        <div className="mt-5 signup-form">
          <Form>
            <Form.Group
              className="mb-3 input-feild form-floating"
              controlId="formBasicEmail"
            >
              <Form.Control
                type="email"
                id="email"
                placeholder="Enter Email Id"
                className="pt-3 pb-3 form-input"
                onChange={(e)=>setEmail(e.target.value)}
              />
              <label htmlFor="email" className="text-muted">
                Enter the Email Id
              </label>
            </Form.Group>
            <Form.Group
              className="mb-3 input-feild form-floating"
              controlId="formBasicPassword"
            >
              <Form.Control
                type="password"
                id="password"
                placeholder="Password"
                className="pt-3 pb-3"
                onChange={(e)=>setPassword(e.target.value)}
              />
              <label htmlFor="password" className="text-muted">
                Password
              </label>
            </Form.Group>
              <Form.Group
                className="mb-3 input-feild form-floating"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  id="conformpassword"
                  placeholder="Conform Password"
                  className="pt-3 pb-3"
                  onChange={(e)=>setConformPassword(e.target.value)}
                />
                <label htmlFor="confrompassword" className="text-muted">
                  Conform Password
                </label>
              </Form.Group>
            <div className="signup-button d-flex align-items-center justify-content-center w-100">
              <Button
                variant="primary"
                type="submit"
                className={`violet-shade-bg`}
                onClick={signUpUser}
                >
                Submit
              </Button>
            </div>
          </Form>
        </div>
          <div className="signup-text d-flex align-items-center justify-content-center">
            <p>Already a member?</p>
            <p className="login-text">
              <Link to="/login">
                {" "}
                Log In
              </Link>
            </p>
          </div>
      </div>
    </div>
  );
};
