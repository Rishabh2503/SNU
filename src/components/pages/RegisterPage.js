import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import "..//../Styles/Register.css"
import { useState } from 'react'
import axios from 'axios'
import Footer from '../Section/Footer'

export default function SignUpPage() {
    let navigate = useNavigate();
    const [username,SetUserName]=useState("");
    const [password,SetUserPassword]=useState("");
    const [mobilenumber,SetUsermobilenumber]=useState("");
   
    const handleSubmit = async (e) => {
      e.preventDefault();
      navigate('/home');
      SetUserName("");
      SetUserPassword("");
      SetUsermobilenumber("");
      console.log(username,password)
           axios.post("https://sign-gyud.onrender.com/api/register",{
              username : username,     
        password : password,
        mobilenumber:mobilenumber
       })
             .then(result=>{
        console.log(result)
      
       }) 
             .catch(err=>{
              console.log(err)
                        
           }) 
    }
    return (
        <>
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
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
                    <label>Mobile number</label><br/>
                    <input
                  type="text"
                  required
                  id="mobilenumber"
                  name="mobilenumber"
                  value={mobilenumber}
                  onChange={(e)=>{SetUsermobilenumber(e.target.value)}}
                />
                </p>
                <p>
                    <label>Password</label><br/>
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
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={handleSubmit}>Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        <Footer />
        </>
    )

}
