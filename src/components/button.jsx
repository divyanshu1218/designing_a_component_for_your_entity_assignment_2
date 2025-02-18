// components/button.jsx
import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button style={styles.button} onClick={onClick}>
      View Product
    </button>
  );
};

// Styles for the button
const styles = {
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Button; // Ensure this line is present