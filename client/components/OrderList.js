import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const OrderList = ({user}) => {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    
    fetch(`/api/getorder?userid=${user.userid}`)
      .then(res => res.json())
      .then(res => {
        setOrders(res.map((order, i) => 
          <ul key = {i}>
            <li>{order.orderid}</li>
            <li>{order.link}</li>
            <li>{order.note}</li>
            <li>{order.quote}</li>
            <li>{order.agreequote}</li>
            <li>{order.completed}</li>
          </ul>
        ));
      })
      .catch(err => console.log('GET to /api/getOrder FAILED ', err));

  }, []);
  console.log(orders);
  
  return (
    <>
      {orders}
    </>
  );
};

export default OrderList;
