import express from 'express';
import { createNomination } from '../controllers/nominationController.ts';

const router = express.Router();

router.post('/submit-nomination', createNomination);

export default router;
