import React, { useEffect, useState } from 'react';

function ScrollTracker() {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={styles.container}>
      <h2>📜 Scroll Position Tracker</h2>
      <p>Scroll Y Position: <strong>{Math.round(scrollY)}px</strong></p>
    </div>
  );
}

const styles = {
  container: {
    position: 'fixed',
    top: '10px',
    right: '10px',
    background: '#333',
    color: '#fff',
    padding: '12px 16px',
    borderRadius: '8px',
    fontFamily: 'Arial',
    fontSize: '16px',
    zIndex: 999,
  },
};

export default ScrollTracker;
