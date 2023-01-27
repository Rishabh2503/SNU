import React from 'react'
import web from '../../assets/images/img1.png'

export default function Sectionhead() {
  return (
    <>
    <section id="header" className="d-flex algin-items-center ">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
            
                    <section id="hero1">
          <div className="txtcon aos-init aos-animate" data-aos="zoom-out" data-aos-delay="1000">
            <div className="blocks block0">
              <h1 className="blast-text3">
                <span className="text3">Accelerating</span>
                &nbsp;
                <span className="text3">Shipment </span>
                <span className="text3">Transformation</span>
              </h1>
            </div>
            <div className="blocks block1">
              <h2 className="blast-text3">
                <span className="text3">I</span>
                <span className="text3">T</span>
                <span className="text3">E</span>
                <span className="text3">M</span>
                &nbsp;
                <span className="text3">|</span>
                &nbsp;
                <span className="text3">S</span>
                <span className="text3">T</span>
                <span className="text3">A</span>
                <span className="text3">T</span>
                <span className="text3">U</span>
                <span className="text3">S</span>
                &nbsp;
                <span className="text3">|</span>
                 &nbsp; 
                <span className="text3">P</span>
                <span className="text3">R</span>
                <span className="text3">I</span>
                <span className="text3">C</span>
                <span className="text3">E</span>
                <span className="text3">I</span>
                <span className="text3">N</span>
                <span className="text3">G</span>
              </h2>
            </div>
            <br />
          </div>
        </section>
                </div>
                <div className="col-lg-6 order-lg-2 header-img"><img src={web} className="img-fluid animated" alt="home img" />
                </div>
                </div>
                </div>
            </div>
        </div>
        </section> 
    </>
  )
}
