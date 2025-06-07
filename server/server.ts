import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import nominationRoutes from './routes/nominationRoutes.ts';
import { sequelize } from './config/db.ts';
import Nomination from './models/Nomination.ts';
import upload from './routes/upload.ts';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', nominationRoutes);
app.use('/api', upload);

// DB sync and start server
sequelize.sync().then(() => {
  console.log('Database connected and models synchronized.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
