import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  return (
    <div>
          <hr />
        <h4>Question 3</h4>
      <h2 style={{ color: "red" }}>Parent Component</h2>
      <ChildComponent message="Good morning" />
    </div>
  );
}

export default ParentComponent;
