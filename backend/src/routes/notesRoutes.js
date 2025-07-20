import express from 'express';
import { getAllNotes, createNotes, updateNotes, deleteNotes } from '../controllers/notesController.js'; // Import the controller function

const router = express.Router();

router.get('/',getAllNotes);
router.post('/',createNotes);
router.put('/:id',updateNotes);
router.delete('/:id',deleteNotes);

export default router;