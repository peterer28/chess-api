import { Router } from 'express';
import { createGame, getBoard, makeMove } from '../controllers/chessController';

const router = Router();

// Define the routes and directly pass the controller functions
router.post('/create', createGame);
router.get('/board', getBoard);
router.post('/move', makeMove);

export default router;
