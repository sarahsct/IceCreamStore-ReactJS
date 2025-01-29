import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';  
import { CartContext } from './CartProvider';  

function Card(props) {
  const { addToCart } = useContext(CartContext); 
    const [count, setCounter] = useState(0);

    const updateCounter = (delta) => {
      setCounter((prevCount) => Math.max(0, prevCount + delta)); // Prevent negative counts
    };
    

  const addItemToCart = () => {
    if (count > 0) {
      const item = {
        id: new Date().getTime(), 
        name: props.name,
        price: props.price,
        image: props.image,
        quantity: count,  
      };
      addToCart(item); 
    }
  };

  return (
    <>
      <div className="divider">
        <div className="card">
          <img className="card-img" src={props.image} alt={props.name} />
          <p className="card-name">{props.name}</p>
          <p className="card-desc">{props.desc}</p>
          <p className="card-desc">{props.price} AED (per 100g Tub)</p>
          <p className="avail">{props.isAvailable ? 'In Stock' : 'Out Of Stock'}</p>
          <button 
  onClick={() => updateCounter(1)} 
  disabled={!props.isAvailable}
>
  +
</button>
<button 
  onClick={() => updateCounter(-1)} 
  disabled={count <= 0 || !props.isAvailable}
>
  -
</button>

          <p>{count}</p>

          <button 
  className='cardButton' 
  onClick={addItemToCart} 
  disabled={count === 0}
>
  Add to Cart
</button>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  price: PropTypes.number,
  isAvailable: PropTypes.bool,
  image: PropTypes.string,
};

Card.defaultProps = {
  name: 'N/A',
  desc: 'N/A',
  price: 0,
  isAvailable: false,
  image: '?',
};

export default Card;
