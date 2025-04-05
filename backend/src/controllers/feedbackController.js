import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// method to submit feedback
export const submitFeedback = async (req, res) => {
  const { rating, comment, feedbackReason, userType, name, email } = req.body;

  // Input validation
  if (!rating || !feedbackReason || !userType || !name || !email) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // creating a new feedback entry 
    const feedback = await prisma.feedback.create({
      data: {
        rating: parseInt(rating, 10), // Ensure rating is an integer
        comment: comment || null, // Handle potential undefined comment
        feedbackReason,
        userType,
        name,
        email,
      },
    });

    // sending success response
    res.status(201).json({
      message: 'Feedback submitted successfully!',
      feedback,
    });
  } catch (error) {
    // More specific error handling
    if (error.code === 'P2002') { // Unique constraint violation
      return res.status(409).json({ message: 'Duplicate feedback submission' });
    }
    console.error(error);
    res.status(500).json({ message: 'Error submitting feedback', error: error.message });
  }
};

// method to get all feedback data.  Consider pagination for large datasets.
export const getAllFeedback = async (req, res) => {
  try {
    // Fetching all feedback data from the database.  Potentially add pagination here.
    const feedback = await prisma.feedback.findMany();

    // Sending the fetched feedback data as response
    res.status(200).json(feedback);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching feedback data', error: error.message });
  }
};