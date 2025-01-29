import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import './index.css';
import NavBar from './navBar';
import Card from './Card';
import List from './List';
import Footer from './Footer';
import banana from './assets/banana.jpeg';
import vanilla from './assets/vanilla.jpeg';
import bluerain from './assets/bluerain.jpeg';
import raspberry from './assets/raspberry.jpeg';
import Feedback from './Feedback';
import IceCreamForm from './IceCreamForm';
import CartProvider from './CartProvider';  
import { CartContext } from './CartProvider';
import Ordersummary from "./Ordersummary";
function App() {

  const menuContent = (
    <>
      <List name="Scoop Selection" />
      <Card name="Banana" image={banana} desc="For after an exhausting day" price={23} isAvailable={true} />
      <Card name="Blueberry" image={bluerain} desc="For Beach Day" price={15} isAvailable={true} />
      <Card name="Pistachio" />
      <Card name="Vanilla" image={vanilla} desc="For comfort" price={12} isAvailable={true} />
      <Card name="Raspberry" image={raspberry} desc="For Cravings" price={25} isAvailable={true} />
      <Feedback />
    </>
  );


  return (

    <div className="page">
      <CartProvider>       
        <Router>
          <NavBar />     

         <Routes>
         <Route path="/" element={menuContent} />
            <Route path="/menu" element={menuContent} />
            <Route path="/order" element={<IceCreamForm />} />
            <Route path="/cart" element={<Ordersummary />} />
          </Routes>
        </Router>
      </CartProvider>
      <Footer />
    </div>
  );
}


export default App;
