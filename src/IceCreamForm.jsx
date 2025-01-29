import React, { useState, useContext, useRef } from 'react';
import { CartContext } from './CartProvider';

const IceCreamForm = () => {
  const { addToCart } = useContext(CartContext); 
  const toppingInputRef = useRef(null);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [comment, setComment] = useState("");
  const [flavor, setFlavor] = useState("");
  const [shipping, setShipping] = useState("Pickup");
  const [size, setSize] = useState("");
  const [toppings, setToppings] = useState([]);
  const [selectedTopping, setSelectedTopping] = useState("");
  const [scoop, setScoop] = useState("Single");

   const scoopPrices = {
    Single: 5,
    Double: 8, 
    Value: 7,
  };

  const textHandler = (event) => setName(event.target.value);
  const commentHandler = (event) => setComment(event.target.value);
  const flavorHandler = (event) => setFlavor(event.target.value);
  const shippingHandler = (event) => setShipping(event.target.value);
  const sizeHandler = (event) => setSize(event.target.value);
  const toppingHandler = (event) => setSelectedTopping(event.target.value);
  const scoopHandler = (event) => setScoop(event.target.value);

  const handleAddTopping = () => {
    if (selectedTopping.trim() && !toppings.includes(selectedTopping)) {
      setToppings((prev) => [...prev, selectedTopping.trim()]);
      setSelectedTopping(""); 
      toppingInputRef.current.focus(); 

    }
  };
  
  const handleToppingRemove = (index) => {
    setToppings((prev) => prev.filter((_, i) => i !== index));
  };

  const calculateTotalPrice = () => {
    const basePrice = scoopPrices[scoop];
    return basePrice * parseInt(quantity, 10);
  };

  const handleAddToCart = () => {
    const item = {
      id: Date.now(), 
      name: flavor, 
      price: calculateTotalPrice(),
      quantity: parseInt(quantity, 10),
      size,
      scoop,
      toppings,
      shipping,
    };
    addToCart(item); // Add to cart using context

  };

  return (
    <>   
     <div className='orderhere'>

      <h1>Order Here:</h1>

      <div className='formbox'>
        <input
          type="text"
          value={name}
          onChange={textHandler}
          placeholder="Enter your name"
        />
        <p>Customer Name: {name} </p>
      </div>
<br/>
      <div className='formbox'>
        <select value={flavor} onChange={flavorHandler}>
          <option value="">Choose your flavor</option>
          <option value="Vanilla">Vanilla</option>
          <option value="Raspberry">Raspberry</option>
          <option value="Blueberry">Blueberry</option>
          <option value="Banana">Banana</option>
        </select>
        <p>Flavor: {flavor}</p>
      </div>
      <br/>

      <div className='formbox'>
        <label>Choose Size:</label>
        <select value={size} onChange={sizeHandler}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <p>Size: {size}</p>
      </div>
      <br/>

      <div className='formbox'>
        <label>Add Toppings:</label>
        <input
          type="text"
          ref={toppingInputRef} 
          value={selectedTopping}
          onChange={toppingHandler}
          placeholder="Topping"
        />
        <button onClick={handleAddTopping}>
          Add Topping
        </button>
        <ul>
          {toppings.map((topping, index) => (
            <li key={index}>
              {topping} <button onClick={() => handleToppingRemove(index)}>x</button>
            </li>
          ))}
        </ul>
      </div>

      <div className='formbox'>
        <label>Scoop:</label>
        <input
          type="radio"
          value="Single"
          onChange={scoopHandler}
          checked={scoop === "Single"}
        />{" "}
        Single Scoop
        <br/>
        <input
          type="radio"
          value="Double"
          onChange={scoopHandler}
          checked={scoop === "Double"}
        />{" "}
        Double Scoop
      <br/>
        <input
          type="radio"
          value="Value"
          onChange={scoopHandler}
          checked={scoop === "Value"}
        />{" "}
        Value Scoop
      </div>

      <div className='formbox'>
        <label>Order Type: </label>
        <input
          type="radio"
          value="Delivery"
          onChange={shippingHandler}
          checked={shipping === "Delivery"}
        />{" "}
        Delivery
        <br/>
        <input
          type="radio"
          value="Pickup"
          onChange={shippingHandler}
          checked={shipping === "Pickup"}
        />{" "}
        Pick Up
      </div>

      <div className='formbox'>
        <label>Additional Comments:</label>
        <textarea value={comment} onChange={commentHandler} />
        <p>Comments: {comment}</p>
      </div>
        <button onClick={handleAddToCart}
                  disabled={!flavor} 
                  >
          Add to Cart
        </button>
          <br></br>        <br></br>
    </div>
    </>
  );
};

export default IceCreamForm;
