import React, { useContext, useEffect } from "react";
import { CartContext } from "./CartProvider";

const OrderSummary = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  // log the cart when it updates
  useEffect(() => {
    console.log("Cart updated:", cart);

    const handleClick = () => {
      console.log("Cart Opened!");
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [cart]); 

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };
  
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  return (
    <div className="order-summary">
      <h2>Order Summary:</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="order-item">
            <p>Name: {item.name}</p>
            <p>Price: {item.price} AED</p>
            <p>Quantity: {item.quantity}</p>

            {item.payment && <p>Flavor: {item.payment}</p>}
            {item.size && <p>Size: {item.size}</p>}
            {item.scoop && <p>Scoop: {item.scoop}</p>}
            {item.toppings && item.toppings.length > 0 && (
              <p>Toppings: {item.toppings.join(", ")}</p>
            )}
            {item.shipping && <p>Shipping: {item.shipping}</p>}
            {item.comment && <p>Comments: {item.comment}</p>}

            <button onClick={() => handleRemoveFromCart(item.id)}>
              Remove from Cart
            </button>            <div className="remove"/>

            <br/>
          </div>
        ))
      )}
      <br/><br/>
      <div className='total'>
      <p>Total Price: {calculateTotalPrice()} AED</p>
    </div>
    </div>
  );
};

export default OrderSummary;
