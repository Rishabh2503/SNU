import React from 'react'
import web from '../../assets/images/img1.png'

import Navbar from "../Navbar/Navbar"
import "..//../Styles/Home.css"
import Sectionhead from '../Section/Sectionhead'
import Card from '../Section/Card'
import Footer from '../Section/Footer'


export default function HomePage() {
    
    return (
        <>
            <Navbar />
            <Sectionhead />
            <h1 className='whychooseus'> Why Choose Us?</h1>
            <div className="Cardhome">
                
                <Card contentout="DISPATCH ORDERS FROM CLOSET WAREHOUSE." contentin="Choose the warehouse which is closest to the customer's location while you create a Sales order. This way you can deliver faster, save a lot of time and also cut down the transportation cost."/>
                <Card contentout="TRACK YOUR TRANSFER ORDERS." contentin="Select the specific batch or serial number while transferring an item from one warehouse to another. This way, you can keep a track on the movement of each item without any hassles."/>
                <Card contentout="GENERATE ACCURATE REPORTS." contentin="Find out the volume of items that are shipped in and out from each of your warehouses. Get more insights into each item's sales and purchase trends, in simple steps."/>
            </div>
            
            
            
        </>
    )
}
