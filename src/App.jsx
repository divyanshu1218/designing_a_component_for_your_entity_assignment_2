// App.jsx
import React from 'react';
import Productcard from './components/productcard'; // Import the Productcard component
import './App.css'; // Import the CSS file (if needed)

const App = () => {
  return (
    <div className="App">
      <h1>Our Products</h1>
      <div style={styles.container}>
        <Productcard /> {/* Render the Productcard component */}
      </div>
    </div>
  );
};

// Styles for the container
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
};

export default App;