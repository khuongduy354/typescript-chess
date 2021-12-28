"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Board_1 = require("./chess/Board");
const Coordinates_1 = require("./chess/Coordinates");
let newGame = new Board_1.ChessBoard();
newGame.renderBoard();
newGame.move(new Coordinates_1.MapCor(1, 3), new Coordinates_1.MapCor(2, 3));
newGame.renderBoard();
