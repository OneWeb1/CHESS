import Colors from "./Colors.js"
import Cell from "./Cell.js"

import King from "./figures/King.js"

import Queen from "./figures/Queen.js"
import Bishop from "./figures/Bishop.js"
import Knight from "./figures/Knight.js"
import Rook from "./figures/Rook.js"
import Pawn from "./figures/Pawn.js"


class Board {
  constructor() {
    this.cells = []
    this.lostFigures1 = []
    this.lostFigures2 = []
    this.playerColor1 = Colors.WHITE
    this.playerColor2 = Colors.BLACK
    
    this.currentPlayer = this.playerColor1
    this.selectedCell = null
    this.initCells()
  }

  getCell(x, y) {
    if(x<0||x>7||y<0||y>7) return {}
    return this.cells[y][x]
  }
  
  swapPlayer() {
    if(this.currentPlayer===this.playerColor1) {
      this.currentPlayer = this.playerColor2
    }else this.currentPlayer = this.playerColor1
  }
  
  addLostFigure(figure) {
    if(figure.color === this.playerColor1) {
      this.lostFigures1.push(figure)
    }else this.lostFigures2.push(figure)
  }

  initCells() {
    for (let i = 0; i < 8; i++) {
      const row = []
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null))
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null))
        }

      }
      this.cells.push(row)
    }
    this.addFigures()
  }
  
  refresh(boardComponent) {
    const newBoard = new Board()
    newBoard.cells = this.cells
    newBoard.currentPlayer = this.currentPlayer
    
    boardComponent.render(newBoard)
  }

  addKings() {
    new King(this.playerColor2, this.getCell(4, 0))
    new King(this.playerColor1, this.getCell(4, 7))
  }

  addQueens() {
    new Queen(this.playerColor2, this.getCell(3, 0))
    new Queen(this.playerColor1, this.getCell(3, 7))
  }

  addBishops() {
    new Bishop(this.playerColor2, this.getCell(2, 0))
    new Bishop(this.playerColor2, this.getCell(5, 0))
    new Bishop(this.playerColor1, this.getCell(2, 7))
    new Bishop(this.playerColor1, this.getCell(5, 7))
  }

  addKnights() {
    new Knight(this.playerColor2, this.getCell(1, 0))
    new Knight(this.playerColor2, this.getCell(6, 0))
    new Knight(this.playerColor1, this.getCell(1, 7))
    new Knight(this.playerColor1, this.getCell(6, 7))
  }

  addRooks() {
    new Rook(this.playerColor2, this.getCell(0, 0))
    new Rook(this.playerColor2, this.getCell(7, 0))
    new Rook(this.playerColor1, this.getCell(0, 7))
    new Rook(this.playerColor1, this.getCell(7, 7))
  }

  addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(this.playerColor2, this.getCell(i, 1))
      new Pawn(this.playerColor1, this.getCell(i, 6))

    }
  }

  addFigures() {
    this.addKings()
    this.addQueens()
    this.addBishops()
    this.addKnights()
    this.addRooks()
    this.addPawns()
  }
}

export default Board
