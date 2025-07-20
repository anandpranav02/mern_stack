import express from 'express';
import notesRoutes from './routes/notesRoutes.js'; // Import the notes routes
import {connectDB} from './controllers/config/db.js'; // Import the database connection
import dotenv from 'dotenv';  // Import dotenv to manage environment variables  

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000;

connectDB(); // Connect to the database

app.use('/api/notes', notesRoutes); // Use the notes routes under the /api/notes path

app.listen(PORT, () => {
  console.log('Server is running on port:',PORT);
});