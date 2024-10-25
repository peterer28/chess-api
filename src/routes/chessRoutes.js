"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chessController_1 = require("../controllers/chessController");
const router = (0, express_1.Router)();
// Define the routes and directly pass the controller functions
router.post('/create', chessController_1.createGame);
router.get('/board', chessController_1.getBoard);
router.post('/move', chessController_1.makeMove);
exports.default = router;
