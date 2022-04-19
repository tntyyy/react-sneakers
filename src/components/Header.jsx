import React from 'react';
import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="headerLeft d-flex align-center">
          <img src="img/logo.png" width={40} height={40} alt="Logo" />
          <div className="headerInfo ml-15">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="headerRight d-flex">
        <li onClick={props.onClickCart} className="mr-30 d-flex align-center cu-p">
          <img src="img/cart.svg" alt="Cart" className="mr-10" />
          <span>{totalPrice} руб.</span>
        </li>
        <li className="mr-30 cu-p">
          <Link to="/favorites">
            <img src="img/heart.svg" alt="Favorites" className="mr-10" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img src="img/user.svg" alt="Favorites" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
