import React from 'react';
import AppContext from '../components/context';

export const useCart = () => {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => Number(obj.price) + sum, 0);

  return { cartItems, setCartItems, totalPrice };
};
