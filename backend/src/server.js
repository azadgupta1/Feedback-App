import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import feedbackRoutes from './routes/feedbackRoutes.js'; 

dotenv.config();

const PORT = process.env.PORT || 7000;
const app = express();

app.use(cors()); // Allows Cross-Origin requests
app.use(bodyParser.json()); // Parses incoming JSON requests

// Use the feedback routes for API endpoints
app.use('/api', feedbackRoutes); // All routes will be prefixed with "/api"

app.get('/', (req, res) =>{
    res.send("Hello World!");
});

app.listen(PORT, () =>{
    console.log("Server is running on port "+PORT);
});



