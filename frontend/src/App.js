import AllRouting from './Routes';
import { CartContext } from './context/CartContext';
import { useEffect, useState } from 'react';
import { getCart, storeCart } from './helpers';
const App = () => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    setCart(JSON.parse(cart));
    // console.log(JSON.parse(cart));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <AllRouting />
    </CartContext.Provider>
  );
};

export default App;
