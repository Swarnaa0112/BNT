import React from 'react';

function InputField({ label, placeholder, name, onChange }) {
  return (
    
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ display: 'block', marginBottom: '5px' }}>
        {label}
      </label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        style={{
          padding: '8px',
          width: '50%',
          boxSizing: 'border-box'
        }}
      />
    </div>
  );
}

export default InputField;
