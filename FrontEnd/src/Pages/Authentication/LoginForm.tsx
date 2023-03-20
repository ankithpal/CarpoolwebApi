import {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import axios from  'axios';
import jwt_decode from 'jwt-decode';
import "./signupform.scss";

export const LoginForm = () => {
    let [email , setEmail] = useState<string>('');
    let [password , setPassword] = useState<string>('');
 
    const loginUser= async (e : any)=>{
       e.preventDefault();
       try{
        const url = 'https://localhost:7256/login';
        const data = {
          "email": email,
          "password": password
        }

        const  res : string  = await axios.post(url,data); 
        localStorage.setItem('jwt-token', JSON.stringify(res));
        // const user = jwt_decode(localStorage.getItem('jwt-token')!);
        // console.log(user);
        window.location.replace('/bookorofferride');
        
        }catch(err){
            console.log('the error is '+err); 
       }
    }

  return (
    <div
      className={`signupform d-flex align-items-center justify-content-center w-100 violet-shade-bg`}>
      <div className="inner-signupform  h-100 mt-5 d-flex flex-column align-items-center justify-content-center">
        <div className="signup-header d-flex align-items-center justify-content-center">
          <h1>Log In</h1>
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
            <div className="signup-button d-flex align-items-center justify-content-center w-100">
              <Button
                variant="primary"
                type="submit"
                className={`orange-shade-bg`}
                onClick={loginUser}
                >
                Submit
              </Button>
            </div>
          </Form>
        </div>
          <div className="signup-text d-flex align-items-center justify-content-center">
            <p>Don't have account ? </p>
            <p className="login-text">
              <Link to="/">
                {" "}
                sign up
              </Link>
            </p>
          </div>
      </div>
    </div>
  );
};
