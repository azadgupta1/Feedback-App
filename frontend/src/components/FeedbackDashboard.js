
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RatingChart from './RatingChart';
import CommentsSection from './CommentsSection';

const FeedbackDashboard = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [dateFilter, setDateFilter] = useState('all'); // Date filter state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/feedback');
        setFeedbackData(response.data);
      } catch (error) {
        console.error('Error fetching feedback data:', error);
      }
    };

    fetchData();
  }, []);

  const handleLike = (id) => {
    setFeedbackData(prevData =>
      prevData.map(feedback =>
        feedback.id === id ? { ...feedback, likes: feedback.likes + 1 } : feedback
      )
    );
  };

  const handleDislike = (id) => {
    setFeedbackData(prevData =>
      prevData.map(feedback =>
        feedback.id === id ? { ...feedback, dislikes: feedback.dislikes + 1 } : feedback
      )
    );
  };

  // Filter feedback by date
  const filteredFeedbackData = feedbackData.filter(feedback => {
    const feedbackDate = new Date(feedback.timestamp);
    const today = new Date();
    const oneWeekAgo = new Date(today.setDate(today.getDate() - 7));

    if (dateFilter === 'all') return true;
    if (dateFilter === 'recent' && feedbackDate >= oneWeekAgo) return true;
    return false;
  });

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl  font-bold mb-4">Feedback Dashboard</h2>

      {/* Date Filter Dropdown */}
      <select
        className="mb-4 p-2 border rounded"
        value={dateFilter}
        onChange={(e) => setDateFilter(e.target.value)}
      >
        <option value="all">All Time</option>
        <option value="recent">Last Week</option>
        <option value="all">All Ratings</option>
      </select>

      <RatingChart feedbackData={filteredFeedbackData} />
      <CommentsSection
        feedbackData={filteredFeedbackData}
        onLike={handleLike}
        onDislike={handleDislike}
      />
    </div>
  );
};

export default FeedbackDashboard;

