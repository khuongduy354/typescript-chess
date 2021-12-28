"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChessBoard = void 0;
const Pieces_1 = require("./Pieces");
function isUpper(str) {
    return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}
class ChessBoard {
    constructor() {
        this.boardState = [];
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
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
            ],
            [
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
            ],
            [
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
            ],
            [
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
                new Pieces_1.Blank(),
            ],
            [
                this.pieceFactory("P", true),
                this.pieceFactory("P", true),
                this.pieceFactory("P", true),
                this.pieceFactory("P", true),
                this.pieceFactory("P", true),
                this.pieceFactory("P", true),
                this.pieceFactory("P", true),
                this.pieceFactory("P", true),
            ],
            [
                this.pieceFactory("R", true),
                this.pieceFactory("N", true),
                this.pieceFactory("B", true),
                this.pieceFactory("Q", true),
                this.pieceFactory("K", true),
                this.pieceFactory("B", true),
                this.pieceFactory("N", true),
                this.pieceFactory("R", true),
            ],
        ];
    }
    //return board as 2D array
    arrayBoard() {
        return this.boardState;
    }
    //render board as 8x8 grid
    renderBoard() {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                let currentSquare = this.boardState[i][j];
                process.stdout.write(currentSquare.toString() + " ");
            }
            console.log("\n");
        }
    }
    //set piece from a square
    setPiece(cor, piece) {
        this.boardState[cor.xCor][cor.yCor] = piece;
    }
    //get piece from a square
    getPiece(cor) {
        let piece = this.boardState[cor.xCor][cor.yCor];
        return piece;
    }
    //check if move valid
    validator(from, to) {
        let piece = this.getPiece(from);
        return piece.canMove(this, from, to);
    }
    //move piece
    move(from, to) {
        if (this.validator(from, to)) {
            let piece = this.getPiece(from);
            this.setPiece(to, piece);
            this.setPiece(from, new Pieces_1.Blank());
        }
    }
    //make a piece
    pieceFactory(pieceName, isWhite) {
        switch (pieceName.toUpperCase()) {
            case "B":
                return new Pieces_1.Bishop(isWhite);
            case "K":
                return new Pieces_1.King(isWhite);
            case "Q":
                return new Pieces_1.Queen(isWhite);
            case "N":
                return new Pieces_1.Knight(isWhite);
            case "P":
                return new Pieces_1.Pawn(isWhite);
            case "R":
                return new Pieces_1.Rook(isWhite);
            default:
                return new Pieces_1.Blank();
        }
    }
}
exports.ChessBoard = ChessBoard;
