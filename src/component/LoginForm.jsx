import React, { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const isFormValid =
    formData.username.trim() !== '' && formData.password.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in as ${formData.username}`);
  };

  return (
    <form onSubmit={handleSubmit}>
        <hr />
        <h4>Question 9</h4>
      <h2>Login Form</h2>

      <div style={{ marginBottom: '1rem' }}>
        <label>Username:</label><br />
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Password:</label><br />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
      <br /><br /><br />
    </form>
    
  );
}

export default LoginForm;
