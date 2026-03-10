import express from 'express';

const app = express();

app.use(express.json());

// Example API route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Serverless API is running on Vercel!' });
});

// Add your other API routes here
// app.post('/api/contact', (req, res) => { ... });

// Export the Express app for Vercel Serverless Functions
// Do NOT use app.listen() here
export default app;
