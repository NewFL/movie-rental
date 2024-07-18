import React from 'react';
import CheckIcon from './Images/Check.png';
import CrossIcon from './Images/Cross.png';

const IconList = ({ is_in_stock }) => {
  return (
    <ul>
      {is_in_stock.map((is_in_stock, index) => (
        <li key={index}>
          {is_in_stock ? (
            <img src={CheckIcon} alt="Check" style={{ width: '24px', height: '24px' }} />
          ) : (
            <img src={CrossIcon} alt="Times" style={{ width: '24px', height: '24px' }} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default IconList;