import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Controller method to submit feedback
export const submitFeedback = async (req, res) => {
  const { rating, comment, feedbackReason, userType, name, email } = req.body;

  try {
    // Creating a new feedback entry in the database using Prisma
    const feedback = await prisma.feedback.create({
      data: {
        rating,
        comment,
        feedbackReason,
        userType,
        name,
        email,
      },
    });

    // Sending success response
    res.status(201).json({
      message: 'Feedback submitted successfully!',
      feedback,
    });
  } catch (error) {
    // Handling any errors and sending error response
    console.error(error);
    res.status(500).json({
      message: 'Error submitting feedback',
      error: error.message,
    });
  }
};

// Controller method to get all feedback data
export const getAllFeedback = async (req, res) => {
  try {
    // Fetching all feedback data from the database
    const feedback = await prisma.feedback.findMany();

    // Sending the fetched feedback data as response
    res.status(200).json(feedback);
  } catch (error) {
    // Handling any errors and sending error response
    console.error(error);
    res.status(500).json({
      message: 'Error fetching feedback data',
      error: error.message,
    });
  }
};
