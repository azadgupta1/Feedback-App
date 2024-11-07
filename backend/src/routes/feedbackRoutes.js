import express from 'express';
import { submitFeedback, getAllFeedback } from '../controllers/feedbackController.js';

const router = express.Router();

// Route to handle feedback submission
router.post('/feedback', submitFeedback);

// Route to get all feedback
router.get('/feedback', getAllFeedback);

export default router;
