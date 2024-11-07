// import React from 'react'
// import FeedbackForm from './components/FeedbackForm';


// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <FeedbackForm />
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react';
// import FeedbackForm from './components/FeedbackForm';
// import FeedbackDashboard from './components/FeedbackDashboard';
// import './index.css'; // Tailwind CSS styles

// function App() {
//   const [view, setView] = useState('form'); // State to toggle between form and dashboard views

//   const toggleView = () => {
//     setView(view === 'form' ? 'dashboard' : 'form');
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
//       <div className="mb-4">
//         <button
//           onClick={toggleView}
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//         >
//           {view === 'form' ? 'View Dashboard' : 'Submit Feedback'}
//         </button>
//       </div>

//       {view === 'form' ? <FeedbackForm /> : <FeedbackDashboard />}
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackDashboard from './components/FeedbackDashboard';
import './index.css'; // Tailwind CSS styles

function App() {
  const [view, setView] = useState('form'); // State to toggle between form and dashboard views

  const toggleView = () => {
    setView(view === 'form' ? 'dashboard' : 'form');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4">
        <button
          onClick={toggleView}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {view === 'form' ? 'View Dashboard' : 'Submit Feedback'}
        </button>
      </div>

      {view === 'form' ? <FeedbackForm /> : <FeedbackDashboard />}
    </div>
  );
}

export default App;
