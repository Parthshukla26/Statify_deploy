import express from 'express';
import cors from 'cors';
import githubRoutes from './src/routes/githubRoutes.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Configure dotenv
dotenv.config();

// Set up __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173', 'http://127.0.0.1:3000'],
  credentials: true
}));

app.use(express.json());

// API Routes
app.use('/api', githubRoutes);

// Root route redirect
app.get('/', (req, res) => {
  res.redirect(process.env.FRONTEND_URL);
}); 

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// For Vercel serverless deployment
export default app; 