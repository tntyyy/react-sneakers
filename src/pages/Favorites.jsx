import React from 'react';
import Card from '../components/Card/Card';
import AppContext from '../components/context';

const Favorites = ({ onAddToFavorites }) => {
  const { favorites } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>

      <div className="sneakers d-flex flex-wrap">
        {favorites.map((item, index) => (
          <Card key={index} favorited={true} onFavorite={onAddToFavorites} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
