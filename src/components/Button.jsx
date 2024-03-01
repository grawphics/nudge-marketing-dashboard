import React from 'react';

const Button = ({ variant, children, onClick }) => {
  // Define variant styles using Tailwind utility classes
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-700 text-white',
    danger: 'bg-red-500 hover:bg-red-700 text-white',
  };

  // Determine the classes to apply based on the variant prop
  const classes = `px-4 py-2 rounded ${variantStyles[variant] || 'bg-blue-500 hover:bg-blue-700 text-white'}`;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
