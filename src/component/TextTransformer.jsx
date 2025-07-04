import React, { useState } from 'react';

export default function TextTransformer() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleTransform = (type) => {
    let result = '';
    switch (type) {
      case 'upper':
        result = input.toUpperCase();
        break;
      case 'lower':
        result = input.toLowerCase();
        break;
      case 'reverse':
        result = input.split('').reverse().join('');
        break;
      case 'capitalize':
        result = input
          .split(' ')
          .map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(' ');
        break;
      default:
        result = input;
    }
    setOutput(result);
  };

  return (
    <div>
      <h3>Text Transformer</h3>
      <input
        type="text"
        placeholder="Enter text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <button onClick={() => handleTransform('upper')}>Uppercase</button>
      <button onClick={() => handleTransform('lower')}>Lowercase</button>
      <button onClick={() => handleTransform('reverse')}>Reverse</button>
      <button onClick={() => handleTransform('capitalize')}>Capitalize</button>
      <br />
      <h4>Output:</h4>
      <p>{output}</p>
    </div>
  );
}
