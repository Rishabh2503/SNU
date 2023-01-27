import React from 'react'
import { Link } from 'react-router-dom'
import Footer from "../Section/Footer"

import "..//../Styles/Register.css"
import Logo from '../../assets/images/logo.png'
import Warehouse1 from '../../assets/images/warehouse_banner_graphic 1.png'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <div><img alt="logo" src={Logo} /></div>
            <h1 className="main-title">
            Warehouse management system</h1>
            <p className="main-para">Know Your Status</p>
            <div className='Warehouse'><img  alt="warehouse" src={Warehouse1}/>
            <div className="button">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
            </div>
            <Footer />
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    backgroundColor : "white",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}