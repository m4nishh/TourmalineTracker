import express from 'express';
const { Request, Response } = express;
import Nomination from '../models/Nomination.ts';

export const createNomination = async (req: typeof Request, res:  typeof Response) => {
  try {
    const nominationData = req.body ? JSON.parse(JSON.stringify(req.body)) : {};
    await Nomination.create(nominationData);
    res.status(201).json({ message: 'Nomination saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to save nomination', error });
  }
};
