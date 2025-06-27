import React from 'react';
import Child from './Child';

function Parent(props) {
  return (
    <div>
      <h3 style={{ color: "red" }}>Parent Component</h3>
      <Child message={props.message} />
    </div>
  );
}

export default Parent;
