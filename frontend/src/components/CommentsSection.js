import React, { useState } from 'react';
import dayjs from 'dayjs';

const CommentsSection = ({ feedbackData, onLike, onDislike }) => {
  const [filter, setFilter] = useState('all');
  const [timeFilter, setTimeFilter] = useState('all');

  const filteredComments = feedbackData.filter(feedback => {
    if (filter !== 'all' && feedback.rating !== parseInt(filter, 10)) return false;

    const feedbackDate = dayjs(feedback.date);
    if (timeFilter === 'recent' && feedbackDate.isBefore(dayjs().subtract(1, 'day'))) return false;
    if (timeFilter === 'lastWeek' && feedbackDate.isBefore(dayjs().subtract(7, 'day'))) return false;

    return true;
  });

  const handleLike = (id) => {
    onLike?.(id);
  };

  const handleDislike = (id) => {
    onDislike?.(id);
  };

  return (
    <div className="my-6">
      <h3 className="text-xl font-semibold mb-2">User Comments</h3>

      <div className="flex mb-4 space-x-4">
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
        filteredComments.map((feedback) => (
          <div key={feedback.id} className="p-4 mb-3 border border-gray-300 rounded-lg">
            <div className="flex items-center mb-2">
              {[...Array(feedback.rating)].map((_, i) => (
                <span key={i} className="text-yellow-500">★</span>
              ))}
              {[...Array(5 - feedback.rating)].map((_, i) => (
                <span key={i} className="text-gray-300">★</span>
              ))}
            </div>

            <p className="text-gray-800"><strong>User:</strong> {feedback.name || 'Anonymous'}</p>
            <p className="text-gray-800"><strong>Comment:</strong> {feedback.comment || 'No comment provided'}</p>

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