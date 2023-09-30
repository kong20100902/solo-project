import React, { useState, useEffect } from 'react';
import UpdateDelete from './UpdateDelete';
const OrderList = ({user, orderCount}) => {
  const [orders, setOrders] = useState(null);
  const [totalOrder, setTotalOrder] = useState(0);
  const [quoteAgreed, setQuoteAgreed] = useState(false);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    fetch(`/api/getorder?userid=${user.userid}`)
      .then(res => res.json())
      .then(res => {
        if(res !== 'no order'){
          setOrders(res.map((order, i) => 
            <ul key = {i}>
              <li>ORDER LINK: {order.link}</li>
              <li>ORDER NOTES: {order.note}</li>
              <li>ORDER QUOTE:{order.quote} (0 by default)</li>
              <li>AGREE WITH QUOTE? :{order.agreequote}</li>
              <li>ORDER COMPLETED? {order.completed}</li>
              <li><UpdateDelete 
                orderid = {order.orderid}
                agreequote = {order.agreequote}
                quoteAgreed = {quoteAgreed}
                setQuoteAgreed = {setQuoteAgreed}
                deleted = {deleted}
                setDeleted = {setDeleted}
              /></li>
            </ul>
          ));
          setTotalOrder(res.length);
        }
        else{
          setOrders(null);
          setTotalOrder(0);
        }
      })
      .catch(err => console.log('GET to /api/getOrder FAILED ', err));

  }, [orderCount, deleted, quoteAgreed]);
  
  return (
    <>
      <div>
        You currently have {totalOrder} orders.
      </div>
      {orders}
    </>
  );
};

export default OrderList;
