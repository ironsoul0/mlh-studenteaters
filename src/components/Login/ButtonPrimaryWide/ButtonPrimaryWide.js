import * as React from 'react';
import './ButtonPrimaryWide.css';

const ButtonPrimaryWide = ({ style, name, onClick, disabled }) => {
  return (
    <button
      style={style}
      className='button__primary__wide'
      onClick={onClick}
      disabled={disabled}
    >
      <span className='button__primary__wide__title'>{name}</span>
    </button>
  );
};

export default ButtonPrimaryWide;
