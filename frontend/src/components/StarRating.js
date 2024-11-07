import React, { useState } from 'react';

const StarRating = ({ rating, onChange }) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleClick = (starValue) => {
    onChange(starValue);
  };

  const handleMouseEnter = (starValue) => {
    setHoveredRating(starValue);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-8 h-8 cursor-pointer ${
            (hoveredRating || rating) >= star ? 'text-yellow-500' : 'text-gray-300'
          }`}
          onClick={() => handleClick(star)}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.685 1.484 8.009-7.42-3.935-7.42 3.935 1.484-8.009-6.064-5.685 8.332-1.151z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
