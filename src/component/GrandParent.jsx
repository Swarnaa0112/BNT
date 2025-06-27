import React from 'react';
import Parent from './Parent';

function GrandParent() {
  const message = "Hello from GrandParent";
  return (
    <div>
        <hr />
        <h4>Question 4</h4>
      <h2>GrandParent Component</h2>
      <Parent message={message} />
      <br /><br /><br />
    </div>
  );
}

export default GrandParent;
