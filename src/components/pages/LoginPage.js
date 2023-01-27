import React from 'react'
import { Link } from 'react-router-dom'
import "..//../Styles/Register.css"
import { useState} from 'react'
import axios from 'axios'
import Footer from '../Section/Footer'

export default function SignInPage() {
   
    const [username,SetUserName]=useState("");
  const [password,SetUserPassword]=useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    SetUserName("");
    SetUserPassword("");
    console.log(username,password)
         axios.post("https://sign-gyud.onrender.com/api/login",{
            username : username,     
      password : password,
     })
           .then(result=>{
      console.log(result);
      
     
     }) 
           .catch(err=>{
            console.log(err)
                      
         }) 
  }
    return (
        <>
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input
                  type="text"
                  required
                  id="UserName"
                  name="UserName"
                  value={username}
                  onChange={(e)=>{SetUserName(e.target.value)}}
                />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input
                  type="text"
                  required
                  id="Password"
                  name="Password"
                  value={password}
                  onChange={(e)=>{SetUserPassword(e.target.value)}}
                />
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={handleSubmit}>Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        <Footer />
        </>
    )
}
