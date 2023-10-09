let selfFigure = null
const FigureNames = {
  FIGURE: "Фигура",
  KING: "Король",
  KNIGHT: "Конь",
  PAWN: "Пешка",
  QUEEN: "Ферзь",
  ROOK: "Ладья",
  BISHOP: "Слон",
}

class Figure {
  constructor(color, cell) {
    this.src = null
    //this.cell.figure = this
    selfFigure = this
    this.name = FigureNames.FIGURE
  }

  diagonal(target) {
    const getCell = this.cell.board.getCell.bind(this.cell.board)


    let idx = -1
    for (let i = target.x + idx; i > -1; i--) {
      const cell = getCell(i, target.y + idx)
      if (cell.figure) {
        selfFigure.isEnemyFigure(cell)
        break
      }
      cell.isCanMove = true
      idx--
    }

    idx = -1
    for (let i = target.x + 1; i < 8; i++) {
      const cell = getCell(i, target.y + idx)
      if (cell.figure) {
        selfFigure.isEnemyFigure(cell)
        break
      }
      cell.isCanMove = true
      idx--
    }
    idx = 1
    for (let i = target.x - 1; i > -1; i--) {
      const cell = getCell(i, target.y + idx)
      if (cell.figure) {
        selfFigure.isEnemyFigure(cell)
        break
      }
      cell.isCanMove = true
      idx++
    }
    idx = 1
    for (let i = target.x + 1; i < 8; i++) {
      const cell = getCell(i, target.y + idx)
      if (cell.figure) {
        selfFigure.isEnemyFigure(cell)
        break
      }
      cell.isCanMove = true
      idx++
    }
  }
  
  horizontalAndVertical(target) {
    const getCell = this.cell.board.getCell.bind(this.cell.board)
    for (let i = target.y - 1; i > -1; i--) {
      const cell = getCell(target.x, i)
      if (cell.figure) {
        selfFigure.isEnemyFigure(cell)
        break
      }
      cell.isCanMove = true
    }
    for (let i = target.y + 1; i < 8; i++) {
      const cell = getCell(target.x, i)
      if (cell.figure) {
        selfFigure.isEnemyFigure(cell)
        break
      }
      cell.isCanMove = true
    }
    for (let i = target.x - 1; i > -1; i--) {
      const cell = getCell(i, target.y)
      if (cell.figure) {
        selfFigure.isEnemyFigure(cell)
        break
      }
      cell.isCanMove = true
    }
    for (let i = target.x + 1; i < 8; i++) {
      const cell = getCell(i, target.y)
      if (cell.figure) {
        selfFigure.isEnemyFigure(cell)
        break
      }
      cell.isCanMove = true
    }
  }

  isEnemyFigure(cell) {
    if (cell.figure.color !== cell.board.currentPlayer) {
      cell.isBeat = true
    }
  }

}


export { Figure, FigureNames }
