import {
  Piece,
  Bishop,
  King,
  Queen,
  Pawn,
  Rook,
  Knight,
  Blank,
} from "./Pieces";
import { MapCor } from "./Coordinates";
import { throws } from "assert";
function isUpper(str: string): boolean {
  return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}

export class ChessBoard {
  constructor() {
    this.boardState = [
      [
        this.pieceFactory("R", false),
        this.pieceFactory("N", false),
        this.pieceFactory("B", false),
        this.pieceFactory("Q", false),
        this.pieceFactory("K", false),
        this.pieceFactory("B", false),
        this.pieceFactory("N", false),
        this.pieceFactory("R", false),
      ],
      [
        this.pieceFactory("P", false),
        this.pieceFactory("P", false),
        this.pieceFactory("P", false),
        this.pieceFactory("P", false),
        this.pieceFactory("P", false),
        this.pieceFactory("P", false),
        this.pieceFactory("P", false),
        this.pieceFactory("P", false),
      ],
      [
        new Blank(),
        new Blank(),
        new Blank(),
        new Blank(),
        new Blank(),
        new Blank(),
        new Blank(),
        new Blank(),
      ],
      [
        new Blank(),
        new Blank(),
        new Blank(),
        new Blank(),
        new Blank(),
        new Blank(),
        new Blank(),
        new Blank(),
      ],
      [
        new Blank(),
        new Blank(),
        new Blank(),
        new Blank(),
        new Blank(),
        new Blank(),
        new Blank(),
        new Blank(),
      ],
      [
        new Blank(),
        new Blank(),
        new Blank(),
        new Blank(),
        new Blank(),
        new Blank(),
        new Blank(),
        new Blank(),
      ],
      [
        this.pieceFactory("P", false),
        this.pieceFactory("P", false),
        this.pieceFactory("P", false),
        this.pieceFactory("P", false),
        this.pieceFactory("P", false),
        this.pieceFactory("P", false),
        this.pieceFactory("P", false),
        this.pieceFactory("P", false),
      ],
      [
        this.pieceFactory("R", false),
        this.pieceFactory("N", false),
        this.pieceFactory("B", false),
        this.pieceFactory("Q", false),
        this.pieceFactory("K", false),
        this.pieceFactory("B", false),
        this.pieceFactory("N", false),
        this.pieceFactory("R", false),
      ],
    ];
  }
  boardState: Piece[][] = [];
  //return board as 2D array
  arrayBoard() {
    return this.boardState;
  }

  //render board as 8x8 grid
  renderBoard() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        let currentSquare: Piece = this.boardState[i][j];
        process.stdout.write(currentSquare.toString() + " ");
      }
      console.log("\n");
    }
  }
  //set piece from a square
  setPiece(cor: MapCor, piece: Piece) {
    this.boardState[cor.xCor][cor.yCor] = piece;
  }
  //get piece from a square
  getPiece(cor: MapCor) {
    let piece: Piece = this.boardState[cor.xCor][cor.yCor];
    return piece;
  }

  //check if move valid
  validator(from: MapCor, to: MapCor): boolean {
    let piece: Piece = this.getPiece(from);
    return piece.canMove(this, from, to);
  }

  //move piece
  move(from: MapCor, to: MapCor) {
    if (this.validator(from, to)) {
      let piece: Piece = this.getPiece(from);
      this.setPiece(to, piece);
      this.setPiece(from, new Blank());
    }
  }

  //make a piece
  pieceFactory(pieceName: string, isWhite: boolean): Piece {
    switch (pieceName.toUpperCase()) {
      case "B":
        return new Bishop(isWhite);
      case "K":
        return new King(isWhite);
      case "Q":
        return new Queen(isWhite);
      case "N":
        return new Knight(isWhite);
      case "P":
        return new Pawn(isWhite);
      case "R":
        return new Rook(isWhite);
      default:
        return new Blank();
    }
  }
}
