// write product card here
// components/productcard.jsx
import React from 'react';
import Button from './button'; // Import the Button component

const Productcard = () => {
  // Static product details
  const productImage = "https://via.placeholder.com/200"; // Placeholder image URL
  const productName = "Sample Product";
  const price = "$49.99";

  // Handle button click
  const handleViewProduct = () => {
    alert(`Viewing ${productName}`);
  };

  return (
    <div style={styles.card}>
      <img src={productImage} alt="Product" style={styles.productImage} />
      <h2 style={styles.productName}>{productName}</h2>
      <p style={styles.price}>{price}</p>
      <Button onClick={handleViewProduct} /> {/* Use the Button component */}
    </div>
  );
};

// Styles for the product card
const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    width: '250px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '16px',
  },
  productName: {
    fontSize: '20px',
    margin: '8px 0',
    color: '#333',
  },
  price: {
    fontSize: '18px',
    margin: '8px 0',
    color: '#007bff',
  },
};

export default Productcard; // Ensure this line is present