import express from 'express';
import { createNomination, getAllNominations } from '../controllers/nominationController.ts';

const router = express.Router();

router.post('/submit-nomination', createNomination);
router.get('/nominations', getAllNominations);


export default router;
