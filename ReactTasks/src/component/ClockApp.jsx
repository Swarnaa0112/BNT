import React, { useState, useEffect } from 'react';

function ClockApp() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🕒 Current Time</h1>
      <p style={styles.time}>{time.toLocaleTimeString()}</p>
    </div>
  );
}

// Simple inline styles
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '10px',
  },
  time: {
    fontSize: '3rem',
    color: '#4CAF50',
  },
};

export default ClockApp;
