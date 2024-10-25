"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chessRoutes_1 = __importDefault(require("./routes/chessRoutes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Middleware to parse incoming JSON requests
app.use(express_1.default.json());
// Basic route for the API root
app.get('/', (req, res) => {
    res.send('Chess API is running!');
});
// Use chess routes
app.use('/chess', chessRoutes_1.default);
// Start the server
app.listen(port, () => {
    console.log(`Chess API is running on http://localhost:${port}`);
});
