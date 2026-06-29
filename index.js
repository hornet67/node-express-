import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to automatically parse JSON bodies
app.use(express.json());

// Base Route
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Welcome to the starter Node Express API!'
  });
});

// Sample API Route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Healthy' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running smoothly at http://localhost:${PORT}`);
});