import React, { useEffect, useState } from 'react';
import style from './SingleProduct.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const { name, size, image } = product;
  // console.log(params);

  useEffect(() => {
    getsignleproduct();
  }, []);
  const goBackHandler = () => {
    navigate(-1);
  };

  const getsignleproduct = async () => {
    const response = await axios
      .get(`/api/products/${params._id}`)
      .then((response) => {
        setProduct(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h4 className={style.back} onClick={goBackHandler}>
        back
      </h4>
      <div className={style.singleproduct}>
        <div>
          <img src={image} alt='' />
        </div>
        <div className={style.productdetails}>
          <h3>{name}</h3>
          <h4>{size}</h4>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
