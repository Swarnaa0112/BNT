import React from "react";

function NameList() {
  const names = ["John", "Jane", "Alex"];

  return (
    <div>
      <hr />
      <h4>Question 5</h4>
      <h3>Name List</h3>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <br />
      <br />
      <br />
    </div>
  );
}

export default NameList;
