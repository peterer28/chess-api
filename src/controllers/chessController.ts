import { Request, Response } from 'express';
import { ChessBoard } from '../chess-logic/chess-board'; // Import chess logic

interface Game {
  chessBoard: ChessBoard;
}

// In-memory store for games (you can use a database later if needed)
const games: Record<string, Game> = {};

// Helper function to generate a unique game ID
function generateUniqueId(): string {
  return Math.random().toString(36).substring(2, 9);
}

// Create a new game
export const createGame = (req: Request, res: Response): void => {
  console.log("Create game request received.");  // Log before game creation

  const gameId = generateUniqueId();
  games[gameId] = { chessBoard: new ChessBoard() };

  console.log("Game created:", games);  // Log after game creation

  res.json({ gameId, message: 'New game created!' });
};


// Get the current state of the board
export const getBoard = (req: Request, res: Response): void => {
  const { gameId } = req.query as { gameId: string };
  const game = games[gameId];
  if (!game) {
    res.status(404).json({ error: 'Game not found' });
    return;
  }
  res.json({ board: game.chessBoard.boardAsFEN });
};

// Make a move
export const makeMove = (req: Request, res: Response): void => {

  console.log("Full request body:", req.body);  // Log the full body to ensure the gameId is included
  const { gameId, prevX, prevY, newX, newY, promotedPieceType } = req.body;

  console.log("Move request received for gameId:", gameId);  // Log the gameId
  const game = games[gameId];
  if (!game) {
    console.log("Game not found for gameId:", gameId);  // Log when the game is not found
    res.status(404).json({ error: 'Game not found' });
    return;
  }

  try {
    game.chessBoard.move(prevX, prevY, newX, newY, promotedPieceType);
    res.json({ board: game.chessBoard.boardAsFEN, message: 'Move successful!' });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};



