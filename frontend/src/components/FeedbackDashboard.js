// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import RatingChart from './RatingChart';
// import CommentsSection from './CommentsSection';

// const FeedbackDashboard = () => {
//   const [feedbackData, setFeedbackData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/feedback');
//         setFeedbackData(response.data);
//       } catch (error) {
//         console.error('Error fetching feedback data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-4">Feedback Dashboard</h2>
//       <RatingChart feedbackData={feedbackData} />
//       <CommentsSection feedbackData={feedbackData} />
//     </div>
//   );
// };

// export default FeedbackDashboard;



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
      <h2 className="text-2xl font-bold mb-4">Feedback Dashboard</h2>

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

// import React, { useEffect, useState } from 'react';
// import { submitFeedback, getFeedback } from '../services/FeedbackService';  // Assuming this is your function to fetch feedback data

// const FeedbackDashboard = () => {
//   const [feedbackData, setFeedbackData] = useState([]);  // Holds all feedback data
//   const [filteredFeedbackData, setFilteredFeedbackData] = useState([]);  // Holds the filtered feedback data
//   const [filterOption, setFilterOption] = useState('all');  // Option for filtering (all, week, month, year)

//   // Fetch feedback data when the component mounts
//   useEffect(() => {
//     const fetchFeedback = async () => {
//       try {
//         const response = await getFeedback();  // Fetch feedback from your service
//         setFeedbackData(response.data);  // Set the feedback data from the API
//         setFilteredFeedbackData(response.data);  // Initially show all feedback
//       } catch (error) {
//         console.error('Error fetching feedback:', error);  // Log any errors
//       }
//     };
//     fetchFeedback();
//   }, []);  // This will run once when the component mounts

//   // Function to filter feedback based on selected filter
//   const filterFeedback = () => {
//     const today = new Date();
//     let filteredData = feedbackData;  // Start with all feedback

//     // Depending on the filter option, adjust the data to show
//     switch (filterOption) {
//       case 'week':
//         const oneWeekAgo = new Date(today);
//         oneWeekAgo.setDate(today.getDate() - 7);  // Get the date for one week ago
//         filteredData = feedbackData.filter(feedback => {
//           const feedbackDate = new Date(feedback.timestamp);
//           return feedbackDate >= oneWeekAgo;  // Filter feedback within the past week
//         });
//         break;

//       case 'month':
//         const oneMonthAgo = new Date(today);
//         oneMonthAgo.setMonth(today.getMonth() - 1);  // Get the date for one month ago
//         filteredData = feedbackData.filter(feedback => {
//           const feedbackDate = new Date(feedback.timestamp);
//           return feedbackDate >= oneMonthAgo;  // Filter feedback within the past month
//         });
//         break;

//       case 'year':
//         const oneYearAgo = new Date(today);
//         oneYearAgo.setFullYear(today.getFullYear() - 1);  // Get the date for one year ago
//         filteredData = feedbackData.filter(feedback => {
//           const feedbackDate = new Date(feedback.timestamp);
//           return feedbackDate >= oneYearAgo;  // Filter feedback within the past year
//         });
//         break;

//       case 'all':
//       default:
//         // If no filter or 'all' is selected, show all feedback
//         filteredData = feedbackData;
//         break;
//     }

//     setFilteredFeedbackData(filteredData);  // Update the state with the filtered data
//   };

//   // Re-run the filter whenever `filterOption` or `feedbackData` changes
//   useEffect(() => {
//     filterFeedback();
//   }, [filterOption, feedbackData]);  // Dependencies: filterOption and feedbackData

//   return (
//     <div>
//       <h1>Feedback Dashboard</h1>

//       {/* Dropdown to select filter option */}
//       <select value={filterOption} onChange={(e) => setFilterOption(e.target.value)}>
//         <option value="all">All Feedback</option>
//         <option value="week">Last Week</option>
//         <option value="month">Last Month</option>
//         <option value="year">Last Year</option>
//       </select>

//       {/* Display the filtered feedback */}
//       <div>
//         {filteredFeedbackData.length > 0 ? (
//           filteredFeedbackData.map(feedback => (
//             <div key={feedback.id || feedback.timestamp}>  {/* Use a unique key */}
//               <p>{feedback.comment}</p>
//               <p><strong>Posted on:</strong> {new Date(feedback.timestamp).toLocaleString()}</p>
//               {/* Add any other feedback details you need */}
//             </div>
//           ))
//         ) : (
//           <p>No feedback available for the selected filter.</p>  
//         )}
//       </div>
//     </div>
//   );
// };

// export default FeedbackDashboard;
