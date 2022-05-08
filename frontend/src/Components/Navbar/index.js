import React, { useContext } from 'react';
import style from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <div className={style.navbar}>
        <div className={style.navlogo}>
          <Link to='/'>
            <img src='/images/logo.png' alt='logo' />
          </Link>
        </div>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/products'>
            <li>Products</li>
          </Link>
          <Link to='/cart'>
            <li>
              <div className={style.cart}>
                <span>{cart.totalItems ? cart.totalItems : 0}</span>

                <div>
                  <img src='/images/cart.png' alt='cart' />
                </div>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
