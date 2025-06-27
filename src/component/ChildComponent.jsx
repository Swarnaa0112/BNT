import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      
      <h3>Child Component</h3>
      <p>{props.message}</p>
      <br /><br /><br />
    </div>
  );
}

export default ChildComponent;
