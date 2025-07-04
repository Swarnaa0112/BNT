import React, { useState } from 'react';

export default function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <h3>Star Rating</h3>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{ fontSize: '24px', cursor: 'pointer' }}
        >
          {star <= rating ? '⭐' : '☆'}
        </span>
      ))}
      <div>Your Rating: {rating}</div>
    </div>
  );
}
