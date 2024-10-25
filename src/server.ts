import express from 'express';
import chessRoutes from './routes/chessRoutes';
import cors from 'cors'

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(cors());
app.use(express.json());

// Middleware to log all incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

// Use chess routes
app.use('/chess', chessRoutes);

app.listen(port, () => {
  console.log(`Chess API is running on http://localhost:${port}`);
});
