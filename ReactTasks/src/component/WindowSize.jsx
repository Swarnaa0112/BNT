import React, { useEffect, useState } from 'react';

function WindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Handler for resize
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Attach event listener
    window.addEventListener('resize', handleResize);

    // Clean up on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={styles.container}>
      <h2>📐 Window Size Tracker</h2>
      <p>Width: <strong>{size.width}px</strong></p>
      <p>Height: <strong>{size.height}px</strong></p>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    background: '#f0f0f0',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: '50px auto',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  }
};

export default WindowSize;
