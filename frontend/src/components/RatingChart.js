import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RatingChart = ({ feedbackData }) => {
  //ratingss counted

  const ratingsCount = [1, 2, 3, 4, 5].map((rating) => {
    // Count how many times each rating appears in the feedback data
    const count = feedbackData.filter((item) => item.rating === rating).length;
    return count;
  });

  const data = {
    labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
    datasets: [
      {
        label: 'Number of Ratings',
        data: ratingsCount,
        backgroundColor: 'rgba(60, 23, 101, 1)', 
        borderColor: 'rgba(60, 23, 101, 1)',
        borderWidth: 1, // Optional border width
        borderRadius: 15
      },
    ],
  };

  const options = {
    indexAxis: 'y', // This makes the bars horizontal
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Rating Distribution',
      },
    },
    layout: {
      padding: {
        left: 30,   
        right: 30,
        top: 20,    
        bottom: 40, 
      },
    },
    scales: {
      x: {
        beginAtZero: true, // Ensuring here that the x-axis starts at 0
        ticks: {
          stepSize: 1, 
        },
      },
      y: {
        beginAtZero: true, // Ensure y-axis starts at 0
        ticks: {
          callback: function (value, index, values) {
            return data.labels[index]; // Display corresponding labels for each rating
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false, 
    height: 300, // Set custom height for the chart (smaller size)
    width: 400,  // Set custom width for the chart (smaller size)
    datasets: [{
      barPercentage: 0.5, 
    }],
    // Adjust categoryPercentage for a 5px gap between bars
    categoryPercentage: 0.8, 
  };

  return (
    <div className="my-6">
      <h3 className="text-xl font-semibold mb-2">Rating Distribution</h3>
      <div
        style={{
          position: 'relative',
          height: '300px', 
          width: '400px',  
          background: 'white', 
          borderRadius: '10px', 
        }}
      >
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default RatingChart;
