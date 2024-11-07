import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import feedbackRoutes from './routes/feedbackRoutes.js'; 

dotenv.config();

const PORT = process.env.PORT || 7000;
const app = express();

app.use(cors()); // to interact from frontend to backend
app.use(bodyParser.json()); 

// Using here the feedback routes for API endpoints
app.use('/api', feedbackRoutes); 

app.get('/', (req, res) =>{
    res.send("Hello World!");
});

app.listen(PORT, () =>{
    console.log("Server is running on port "+PORT);
});



