// import React, { useState } from 'react';
// import StarRating from './Starrating'; // Import the star rating component
// import { submitFeedback } from '../services/FeedbackService';

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     rating: 0,
//     comment: '',
//     feedbackReason: '',
//     userType: '',
//     name: '',
//     email: '',
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleRatingChange = (newRating) => {
//     setFormData({ ...formData, rating: newRating });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await submitFeedback(formData);
//       setIsSubmitted(true);
//     } catch (error) {
//       console.error('Error submitting feedback:', error);
//     }
//   };

//   if (isSubmitted) {
//     return <div className="text-center p-4">Thank you for your feedback!</div>;
//   }

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-4">Submit Your Feedback</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Star Rating Section */}
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium">Rating</label>
//           <StarRating rating={formData.rating} onChange={handleRatingChange} />
//         </div>

//         {/* Comment Box */}
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium">Comments</label>
//           <textarea
//             name="comment"
//             value={formData.comment}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-lg"
//             placeholder="Write your comments here..."
//           />
//         </div>

//         {/* Feedback Reason Dropdown */}
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium">Reason for Feedback</label>
//           <select
//             name="feedbackReason"
//             value={formData.feedbackReason}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-lg"
//           >
//             <option value="">Select a reason</option>
//             <option value="Website Experience">Website Experience</option>
//             <option value="Product Feedback">Product Feedback</option>
//             <option value="Event Review">Event Review</option>
//           </select>
//         </div>

//         {/* User Type */}
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium">User Type</label>
//           <input
//             type="text"
//             name="userType"
//             value={formData.userType}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-lg"
//             placeholder="e.g., Regular User, First-time Visitor"
//           />
//         </div>

//         {/* Name and Email */}
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium">Name (Optional)</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-lg"
//             placeholder="Your name"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium">Email (Optional)</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-lg"
//             placeholder="Your email"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
//         >
//           Submit Feedback
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FeedbackForm;




// import React, { useState } from 'react';
// import StarRating from './StarRating';
// import ThankYou from './ThankYou'; // Import the Thank You component
// import { submitFeedback } from '../services/FeedbackService';

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     rating: 0,
//     comment: '',
//     feedbackReason: '',
//     userType: '',
//     name: '',
//     email: '',
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleRatingChange = (newRating) => {
//     setFormData({ ...formData, rating: newRating });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await submitFeedback(formData);
//       setIsSubmitted(true);
//     } catch (error) {
//       console.error('Error submitting feedback:', error);
//     }
//   };

//   if (isSubmitted) {
//     return <ThankYou />;
//   }

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-4">Submit Your Feedback</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Star Rating Section */}
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium">Rating</label>
//           <StarRating rating={formData.rating} onChange={handleRatingChange} />
//         </div>

//         {/* Comment Box */}
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium">Comments</label>
//           <textarea
//             name="comment"
//             value={formData.comment}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-lg"
//             placeholder="Write your comments here..."
//           />
//         </div>

//         {/* Feedback Reason Dropdown */}
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium">Reason for Feedback</label>
//           <select
//             name="feedbackReason"
//             value={formData.feedbackReason}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-lg"
//           >
//             <option value="">Select a reason</option>
//             <option value="Website Experience">Website Experience</option>
//             <option value="Product Feedback">Product Feedback</option>
//             <option value="Event Review">Event Review</option>
//           </select>
//         </div>

//         {/* Optional User Information */}
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium">Name (Optional)</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-lg"
//             placeholder="Your name"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium">Email (Optional)</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-lg"
//             placeholder="Your email"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
//         >
//           Submit Feedback
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FeedbackForm;




import React, { useState } from 'react';
import StarRating from './StarRating';
import ThankYou from './ThankYou'; // Import the Thank You component
import { submitFeedback } from '../services/FeedbackService';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    rating: 0,
    comment: '',
    feedbackReason: '',
    userType: '',
    name: '',
    email: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRatingChange = (newRating) => {
    setFormData({ ...formData, rating: newRating });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitFeedback(formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  if (isSubmitted) {
    return <ThankYou />;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Submit Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        {/* Star Rating Section */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Rating</label>
          <StarRating rating={formData.rating} onChange={handleRatingChange} />
        </div>

        {/* Comment Box */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Comments</label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Write your comments here..."
          />
        </div>

        {/* Feedback Reason Dropdown */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Reason for Feedback</label>
          <select
            name="feedbackReason"
            value={formData.feedbackReason}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select a reason</option>
            <option value="Website Experience">Website Experience</option>
            <option value="Product Feedback">Product Feedback</option>
            <option value="Event Review">Event Review</option>
          </select>
        </div>

        {/* Optional User Information */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Name (Optional)</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Your name"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Email (Optional)</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Your email"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
