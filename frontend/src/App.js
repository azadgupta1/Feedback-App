import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackDashboard from './components/FeedbackDashboard';
import './index.css'; 

function App() {
  const [view, setView] = useState('form'); // here toggle between form and dashboard views

  const toggleView = () => {
    setView(view === 'form' ? 'dashboard' : 'form');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-800 flex flex-col items-center justify-center">
      <div className="mt-8 mb-4">
        <button
          onClick={toggleView}
          className="text-white bg-gradient-to-r from-pink-400 to-pink-500 font-medium rounded-full text-sm px-5 py-2.5 mb-2 hover:from-pink-500 hover:to-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-600 transition"
        >
          {view === 'form' ? 'View Dashboard' : 'Submit Feedback'}
</button>



      </div>

      {/* Adjust the width of the form/dashboard container */}
      <div className="w-full max-w-lg mt-8 p-4 bg-white rounded shadow-md">
        {view === 'form' ? <FeedbackForm /> : <FeedbackDashboard />}
      </div>
    </div>
  );
}

export default App;
