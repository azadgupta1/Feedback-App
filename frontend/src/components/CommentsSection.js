import React, { useState } from 'react';
import dayjs from 'dayjs'; // For date manippulation

const CommentsSection = ({ feedbackData, onLike, onDislike }) => {
  const [filter, setFilter] = useState('all'); // For rating filter
  const [timeFilter, setTimeFilter] = useState('all'); // For time filter

  // Time-based filter logic
  const filteredComments = feedbackData.filter(feedback => {
    if (filter !== 'all' && feedback.rating !== parseInt(filter, 10)) {
      return false;
    }

    // Time filter logic
    const feedbackDate = dayjs(feedback.date);
    if (timeFilter === 'recent' && dayjs().diff(feedbackDate, 'day') > 1) {
      return false; // Only show comments from the last 24 hours
    }
    if (timeFilter === 'lastWeek' && dayjs().diff(feedbackDate, 'day') > 7) {
      return false; // Only show comments from the last week
    }

    return true; 
  });

  // likinig functionality
  const handleLike = (id) => {
    if (onLike) {
      onLike(id);
    } else {
      console.error('onLike function is not provided');
    }
  };

  //Handles the dislike functionality
  const handleDislike = (id) => {
    if (onDislike) {
      onDislike(id);
    } else {
      console.error('onDislike function is not provided');
    }
  };

  return (
    <div className="my-6">
      <h3 className="text-xl font-semibold mb-2">User Comments</h3>

      {/* Filter dropdowns */}
      <div className="flex mb-4 space-x-4">
        {/* Rating filter */}
        <select
          className="p-2 border rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Ratings</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </select>

        {/* Time filter */}
        <select
          className="p-2 border rounded"
          value={timeFilter}
          onChange={(e) => setTimeFilter(e.target.value)}
        >
          <option value="all">All Time</option>
          <option value="recent">Recent (Last 24 hours)</option>
          <option value="lastWeek">Last Week</option>
        </select>
      </div>

      {filteredComments.length === 0 ? (
        <p>No comments to display based on the current filter.</p>
      ) : (
        filteredComments.map((feedback, index) => (
          <div key={index} className="p-4 mb-3 border border-gray-300 rounded-lg">
            {/* Display star icons for the rating */}
            <div className="flex items-center mb-2">
              {Array.from({ length: feedback.rating }).map((_, i) => (
                <span key={i} className="text-yellow-500">★</span>
              ))}
              {Array.from({ length: 5 - feedback.rating }).map((_, i) => (
                <span key={i} className="text-gray-300">★</span>
              ))}
            </div>

            {/* Display user name */}
            <p className="text-gray-800"><strong>User:</strong> {feedback.name || 'Anonymous'}</p>
            <p className="text-gray-800"><strong>Comment:</strong> {feedback.comment || 'No comment provided'}</p>

            {/* Like/Dislike buttons */}
            <div className="flex items-center mt-2 space-x-4">
              <button
                className="text-green-500 hover:text-green-700"
                onClick={() => handleLike(feedback.id)}
              >
                👍 {feedback.likes}
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDislike(feedback.id)}
              >
                👎 {feedback.dislikes}
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CommentsSection;






















































