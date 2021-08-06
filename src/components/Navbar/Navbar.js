import React, { useState } from "react";
import './navbar.css';


function Navbar()  {
const [showLinks, setShowLinks] = useState(false);
const [dropdown, setDropdown] = useState(false);

  return (
   <div className="Navbar mb-2">
     <div className="left">
     <i className="fas fa-bars" onClick={()=> setShowLinks(!showLinks)}></i>
     <strong className="white-text">Navbar</strong>
     <div className="links" id={showLinks ? "hidden" : ""}>
     
     <a href="/">Home</a>
      <a href="/features">Features</a>
      <a href="/pricing">Pricing</a> 
      <a >Dropdown<span class="fas fa-caret-down"></span></a>
      {/* {dropdown && <Dropdown />} */}
     </div>
     </div>
     <div className="right">
     <div className="icon">
     <i className="fab fa-twitter"></i>
     <i className="fab fa-google-plus-g"></i>
     <i className="fas fa-user-alt"></i>
     </div>
     </div>
  
   </div>
   
    );
  }

export default Navbar;