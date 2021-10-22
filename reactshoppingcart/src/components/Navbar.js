import React from 'react';
import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
       <header className="header">
          <div className="continue-shopping">
          <Link className="arrow-link" to="/"><i className="arrow fas fa-long-arrow-alt-left"></i></Link>
              <h3>Continue Shopping</h3>
          </div>
          <div className="cart">
         <Link to="/checkout"> <img src="./images/cart.jpg" alt="cart" className="cart-icon"/></Link>
          </div>
      </header>
    </div>
  )
}

export default Navbar
