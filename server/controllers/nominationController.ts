import express from 'express';
const { Request, Response } = express;
import Nomination from '../models/Nomination.ts';

export const createNomination = async (req: typeof Request, res:  typeof Response) => {
  try {
    const nominationData = req.body ? JSON.parse(JSON.stringify(req.body)) : {};
    console.log('Nomination Data:', nominationData);
    await Nomination.create(nominationData);
    res.status(201).json({ message: 'Nomination saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to save nomination', error });
  }
};


export const getAllNominations = async (req: typeof Request, res:  typeof Response) => {
  try {
    const nominations = await Nomination.findAll();
    return res.status(200).json({ nominations });
  } catch (error) {
    console.error('Error fetching nominations:', error);
    return res.status(500).json({ message: 'Failed to retrieve nominations', error });
  }
};