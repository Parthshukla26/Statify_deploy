import express from 'express';
import cors from 'cors';
import githubRoutes from './routes/githubRoutes.js';

const app = express();
const PORT = https://statify-deploy-frontend.onrender.com;

app.use(cors());
app.use('/api', githubRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
