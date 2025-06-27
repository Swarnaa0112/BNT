import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // initial count is 0

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div  style={{ backgroundColor: "pink" }}>
        <hr />
        <h4>Question 1</h4>
      <h2>Count: {count}</h2>
      <button onClick={handleClick} style={{ marginLeft: '30px' }}>Increase </button>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Counter;
