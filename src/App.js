import React, { useState } from "react";
import "./App.css";
import Counter from "./component/Counter";
import ToggleMessage from "./component/ToggleMessage";
import ParentComponent from "./component/ParentComponent";
import GrandParent from "./component/GrandParent";
import NameList from "./component/NameList";
import Checkbox from "./component/CheckBox";
import ControlledInput from "./component/ControlledInput";
import InputField from "./component/InputField";
import LoginForm from "./component/LoginForm";
import ListItem from "./component/ListItem";
import TodoApp from "./component/ToDoApp";
import Counter10 from "./component/Counter10";

function App() {
  const [formData, setFormData] = useState({ username: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Counter />
      <ToggleMessage />
      <ParentComponent />
      <GrandParent />
      <NameList />
      <Checkbox />
      <ControlledInput />

      <div style={{ padding: "20px" }}>
        <hr />
        <h4> Question 8</h4>

        <h2>Reusable Input Field Demo</h2>
        <InputField
          label="Username"
          placeholder="Enter your name"
          name="username"
          onChange={handleChange}
        />
        <p>You typed: {formData.username}</p>
      </div>

      <LoginForm />
      <ListItem />
      < TodoApp />
      <Counter10 />
    </>
  );
}

export default App;
