import React from 'react'
import {NavLink} from 'react-router-dom';
import web from '..//../assets/images/logo.png'
import "./Nav.css";
const Navbar = () =>
{
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
    return (
      <>
     <div className={click ? "main-container3" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-containerb">
          <NavLink  to="/" className="headlogo">
            
          <img to="/" src={web} alt="" /> 
          </NavLink>
          <ul className={click ? "nav-menub active5" : "nav-menub"}>
            <li className="nav-itemb">
              <NavLink
                
                to="/item"
                activeclassname="active5"
                className="nav-linksb"
                onClick={click ? handleClick : null}
              >
                ITEM
              </NavLink>
            </li>
            <li className="nav-itemb">
              <NavLink
                to="/status"
                activeclassname="active5"
                className="nav-linksb"
                onClick={click ? handleClick : null}
              >
                Status
              </NavLink>
            </li>
            <li className="nav-itemb">
              <NavLink
                
                to="/warehouse"
                activeclassname="active5"
                className="nav-linksb"
                onClick={click ? handleClick : null}
              >
                WareHouse
              </NavLink>
            </li>
            <li className="nav-itemb">
              <NavLink
                
                to="/"
                activeclassname="active5"
                className="nav-linksb"
               onClick={click ? handleClick : null}
              >
                <button className="primary-button2">Log out</button>
              </NavLink>
            </li>
            
          </ul>
          <div className="nav-iconb" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    
    </>
    )
}

export default Navbar;