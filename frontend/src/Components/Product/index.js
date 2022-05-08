import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ProductsList from '../ProductsList';
import style from './Product.module.css';
const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const response = await axios
      .get('/api/products')
      .then((response) => {
        setProducts(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h3 className={style.text}>Products </h3>
      <div className={style.products}>
        {products.map((product) => (
          <ProductsList product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Product;
