import express from 'express';

import notesRoutes from './routes/notesRoutes.js'; // Import the notes routes

const app = express();

app.use("/api/notes", notesRoutes); // Use the notes routes under the /api/notes path

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});