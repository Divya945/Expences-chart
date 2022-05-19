import React from 'react';
import './ItemExpences.css';

export default function ItemExpences() {
  const expenceDate = new Date(2021, 3, 28);
  const epenceName = 'Bike Insurence';
  const expencePrice = 2250;

  return (
    <div className="expense-item">
      <div>{expenceDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{epenceName}</h2>
        <p className="expense-item__price">{expencePrice}</p>
      </div>
    </div>
  );
}
