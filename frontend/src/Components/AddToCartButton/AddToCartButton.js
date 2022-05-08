import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import './Addtocart.css';
const AddToCartButton = ({ product }) => {
  const [isAdding, setIsAdding] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const { name, size, price, image } = product;
  const addToCart = (event, product) => {
    // console.log(product);
    let _cart = { ...cart };

    if (!_cart.items) {
      _cart.items = {};
    }
    if (_cart.items[product._id]) {
      _cart.items[product._id] += 1;
    } else {
      _cart.items[product._id] = 1;
    }
    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;
    setCart(_cart);
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
    // const cart = {
    //     items: {
    //         '608c2960e165f6137f02b552': 2,
    //         '608c28e8e165f6137f02b550': 3
    //     },
    //     totalItems: 5
    // }
  };
  return (
    <div>
      <button
        disabled={isAdding}
        className={isAdding ? 'isadding' : 'addbutton'}
        onClick={(e) => {
          addToCart(e, product);
        }}
      >
        ADD{isAdding ? 'ED' : ''}
      </button>
    </div>
  );
};

export default AddToCartButton;
