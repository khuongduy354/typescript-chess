import { ChessBoard } from "./chess/Board";
import { MapCor } from "./chess/Coordinates";
let newGame = new ChessBoard();
newGame.renderBoard();
newGame.move(new MapCor(1, 3), new MapCor(2, 3));
newGame.renderBoard();
