import React from 'react';
import Product from '../../Components/Product';
import style from './Home.module.css';
const Home = () => {
  return (
    <>
      <div className={style.home}>
        <div className={style.left}>
          <h4>are you hungry ?</h4>
          <h1>Don't wait !</h1>
          <button>Order Now</button>
        </div>
        <div>
          <img src='/images/pizza.png' alt='pizza' />
        </div>
      </div>
      <Product />
    </>
  );
};

export default Home;
