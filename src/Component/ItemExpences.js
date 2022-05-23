import React from 'react';
import ExpenceDate from './ExpenceDate';
import './ItemExpences.css';

export default function ItemExpences(props) {
  

  return (
    <div className="expense-item">
     <ExpenceDate date = {props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p className="expense-item__price">${props.amount}</p>
      </div>
    </div>
  );
}
