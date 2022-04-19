import axios from 'axios';
import React from 'react';
import Card from '../components/Card/Card';
import AppContext from '../components/context';

const Orders = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const { onAddToCart, onAddToFavorites } = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://62543b2f89f28cf72b5a5eea.mockapi.io/orders');
        setOrders(data.map((obj) => obj.items).flat());
        setIsLoading(false);
      } catch (error) {
        alert('Ошибка при запросе заказов');
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>

      <div className="sneakers d-flex flex-wrap">
        {(isLoading ? [...Array(4)] : orders).map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
