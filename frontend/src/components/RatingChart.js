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
  const ratingsCount = [1, 2, 3, 4, 5].map(
    (rating) => feedbackData.filter((item) => item.rating === rating).length
  );

  const data = {
    labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
    datasets: [
      {
        label: 'Number of Ratings',
        data: ratingsCount,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div className="my-6">
      <h3 className="text-xl font-semibold mb-2">Rating Distribution</h3>
      <Bar data={data} />
    </div>
  );
};

export default RatingChart;
