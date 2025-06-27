import React, { useState } from "react";

function ToggleMessage() {
  const [message, setMessage] = useState("Hello");

  const toggleMessage = () => {
    setMessage((prev) => (prev === "Hello" ? "Welcome Back" : "Hello"));
  };

  return (
    <div>
        <hr />
        <h4>Question 2</h4>
      <h2>{message}</h2>
      <button onClick={toggleMessage} style={{ backgroundColor: "lightblue" }}>Toggle Message</button>
      <br /><br /><br />
    </div>
    
  );
}

export default ToggleMessage;
