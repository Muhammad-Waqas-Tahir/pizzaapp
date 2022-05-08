import React, { useContext, useEffect, useState } from 'react';
import style from './Cart.module.css';
import { CartContext } from '../../context/CartContext';
import axios from 'axios';
const Cart = () => {
  let total = 0;
  const [products, setProduct] = useState([]);
  const [priceFetched, togglePriceFetched] = useState(false);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    if (!cart.items) {
      return;
    }
    if (priceFetched) {
      return;
    }
    fetch('/api/products/cart-items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ids: Object.keys(cart.items) }),
    })
      .then((res) => res.json())
      .then((products) => setProduct(products));
    togglePriceFetched(true);
  }, [cart, priceFetched]);

  const getqty = (productid) => {
    return cart.items[productid];
  };
  const increment = (productid) => {
    const existingQty = cart.items[productid];
    const _cart = { ...cart };
    _cart.items[productid] = existingQty + 1;
    _cart.totalItems += 1;
    setCart(_cart);
  };
  const decrement = (productid) => {
    const existingQty = cart.items[productid];
    if (existingQty === 1) {
      return;
    }
    const _cart = { ...cart };
    _cart.items[productid] = existingQty - 1;
    _cart.totalItems -= 1;
    setCart(_cart);
  };

  const getsum = (productid, price) => {
    const sum = price * getqty(productid);
    total += sum;
    return sum;
  };
  const handleDelete = (productId) => {
    const _cart = { ...cart };
    const qty = _cart.items[productId];
    delete _cart.items[productId];
    _cart.totalItems -= qty;
    setCart(_cart);
    const updatedProductsList = products.filter(
      (product) => product._id !== productId
    );
    setProduct(updatedProductsList);
  };
  const handleorder = () => {
    window.alert('Order Place Successfully');
    setProduct([]);
    setCart({});
  };
  return products.length ? (
    <div className={style.cart}>
      {/* <h4>Cart Items</h4> */}
      <div className={style.cartcontent}>
        {products.map((product) => {
          return (
            <>
              <ul key={product._id}>
                <li className={style.imagcart}>
                  <img src={product.image} alt='' />
                  <h5>{product.name}</h5>
                </li>
                <li>
                  <button
                    onClick={() => {
                      decrement(product._id);
                    }}
                    className={style.cartbutton}
                  >
                    -
                  </button>
                  <span> {getqty(product._id)}</span>
                  <button
                    onClick={() => {
                      increment(product._id);
                    }}
                    className={style.cartbutton}
                  >
                    +
                  </button>
                </li>
                <li>
                  <h5>PKR {getsum(product._id, product.price)}</h5>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleDelete(product._id);
                    }}
                    className={style.deletebtn}
                  >
                    Delete
                  </button>
                </li>
              </ul>
            </>
          );
        })}
      </div>

      <div>
        <div className={style.grandtotal}>
          <h5>Grand Total: {total}PKR</h5>
        </div>
        <div className={style.orderbutton}>
          <button onClick={handleorder}>Order Now</button>
        </div>
      </div>
    </div>
  ) : (
    <div className={style.emptycart}>
      <img src='./images/empty-cart.png' />
    </div>
  );
};

export default Cart;
