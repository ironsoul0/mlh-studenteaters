import * as React from 'react';
import './CustomInput.css';

const CustomInput = ({
  name,
  style,
  type,
  placeholder,
  value,
  onChange,
  onKeyDown,
}) => {
  return (
    <input
      name={name}
      className='custom__input form-control form-control-md'
      style={style}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e)}
      onKeyDown={onKeyDown}
    />
  );
};

export default CustomInput;
