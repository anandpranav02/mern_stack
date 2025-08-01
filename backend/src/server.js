import express from 'express';
import notesRoutes from './routes/notesRoutes.js'; // Import the notes routes
import {connectDB} from './config/db.js'; // Import the database connection
import rateLimiter from './middleware/rateLimiter.js'; // Import the rate limiting middleware
import dotenv from 'dotenv';  // Import dotenv to manage environment variables  

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle JSON requests
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(rateLimiter); // Apply rate limiting middleware
// Middleware to log requests
app.use((req,res,next) => {
  console.log("Request method:", req.method, "Request URL:", req.url);
  next(); // Call the next middleware in the stack
});

app.use('/api/notes', notesRoutes); // Use the notes routes under the /api/notes path

connectDB().then(() => {
app.listen(PORT, () => {
  console.log('Server is running on port:',PORT);
});
}); 