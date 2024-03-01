import React from 'react';

const Input = ({ type = 'text', className = '', onChange, ...props }) => {
  // Combine default classes with any custom classes passed via props
  const classes = `border px-3 py-2 rounded shadow-sm ${className}`;

  return (
    <input
      type={type}
      className={classes}
      onChange={onChange}
      {...props} 
    />
  )
};

export default Input;
