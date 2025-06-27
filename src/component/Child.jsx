import React from 'react';

function Child(props) {
  return (
    <div>
      <h4>Child Component</h4>
      <p>{props.message}</p>
    </div>
  );
}

export default Child;
