import React from 'react';
import AppContext from './context';

const Info = ({ title, description, imageUrl }) => {
  const { setCartOpened } = React.useContext(AppContext);
  return (
    <div className="cartEmpty d-flex align-center justiy-center flex-column">
      <img className="mb-20" width={120} src={imageUrl} alt="Empty cart" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button className="greenButton" onClick={() => setCartOpened(false)}>
        <img src="img/arrow.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
