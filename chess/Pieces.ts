import { MapCor } from "./Coordinates";
import { ChessBoard } from "./Board";

export interface Piece {
  isWhite: boolean; //TODO: Encapsulate,
  toString(): string;
  canMove(board: ChessBoard, from: MapCor, to: MapCor): boolean;
}

export class Bishop implements Piece {
  constructor(isWhite: boolean) {
    this.isWhite = isWhite;
  }
  isWhite: boolean;
  toString(): string {
    return this.isWhite ? "B" : "b";
  }

  //can move from A to B
  canMove(board: ChessBoard, from: MapCor, to: MapCor) {
    //TODO: implement this
    // if (board.getPiece(from).toString() !== this.toString()) return false;
    // if (from.xCor === to.xCor && from.yCor === to.yCor) return true;
    // //Bishop move check
    // if (Math.abs(to.xCor - from.xCor) === Math.abs(to.yCor - from.yCor)) {
    //   let coX = to.xCor > from.xCor ? 1 : -1;
    //   let coY = to.xCor > from.xCor ? 1 : -1;
    //   while (from.xCor !== to.xCor && from.yCor !== to.yCor) {
    //     from.xCor += coX;
    //     from.yCor += coY;
    //     if (board.getPiece(from).isWhite === this.isWhite) {
    //       return false;
    //     }
    //   }
    //   return true;
    // } else {
    //   return false;
    // }
    return true;
  }
}

export class Rook implements Piece {
  constructor(isWhite: boolean) {
    this.isWhite = isWhite;
  }
  isWhite: boolean;
  toString(): string {
    return this.isWhite ? "R" : "r";
  }
  canMove(board: ChessBoard, from: MapCor, to: MapCor) {
    return true;
  }
}
export class Knight implements Piece {
  constructor(isWhite: boolean) {
    this.isWhite = isWhite;
  }
  isWhite: boolean;
  toString(): string {
    return this.isWhite ? "N" : "n";
  }
  canMove(board: ChessBoard, from: MapCor, to: MapCor) {
    return true;
  }
}
export class Queen implements Piece {
  constructor(isWhite: boolean) {
    this.isWhite = isWhite;
  }
  isWhite: boolean;
  toString(): string {
    return this.isWhite ? "Q" : "q";
  }
  canMove(board: ChessBoard, from: MapCor, to: MapCor) {
    return true;
  }
}
export class King implements Piece {
  constructor(isWhite: boolean) {
    this.isWhite = isWhite;
  }
  isWhite: boolean;
  toString(): string {
    return this.isWhite ? "K" : "k";
  }
  canMove(board: ChessBoard, from: MapCor, to: MapCor) {
    return true;
  }
}
export class Pawn implements Piece {
  constructor(isWhite: boolean) {
    this.isWhite = isWhite;
  }
  isWhite: boolean;
  toString(): string {
    return this.isWhite ? "P" : "p";
  }
  canMove(board: ChessBoard, from: MapCor, to: MapCor) {
    return true;
  }
}
export class Blank implements Piece {
  isWhite: boolean;
  toString(): string {
    return "-";
  }
  canMove() {
    return false;
  }
}
