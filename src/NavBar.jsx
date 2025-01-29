import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';  
import { CartContext } from './CartProvider'; 

const NavBar = () => {
  // Use CartContext to access the cart
  const { cart } = useContext(CartContext); 

  return (
  <div className="header-container">
       <div className="header">
    sarah's <p className="ice">&nbsp;ice cream</p>
      </div>

    <nav className="navbar">   

      <ul className="navbar-links">
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/order">Order Here</Link></li>
        <li><Link to="/cart">  <FaShoppingCart className="cart-icon" /> 
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </Link>
        </li>
      </ul>
    </nav>
  </div>
  );
};

export default NavBar;
