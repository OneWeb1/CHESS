import { Figure, FigureNames } from "./Figure.js"

class Pawn extends Figure {
  constructor(color, cell) {
    super(color, cell)
    Object.assign(this, { color, cell })
    this.src = `./src/assets/${color}-pawn.png`
    this.name = FigureNames.PAWN
    this.cell.figure = this
    this.firstMove = false
  }



  

  move(target) {
    const diff = this.color === this.cell.board.currentPlayer && this.cell.board.playerColor1 === this.color ? -1 : 1
    const getCell = this.cell.board.getCell.bind(this.cell.board)
    if (!this.firstMove) {
      const cell1 = getCell(target.x, target.y + diff)
      const cell2 = getCell(target.x, target.y + diff + diff)
      if (cell1.figure && cell2.figure) return
      if (!cell1?.figure) cell1.isCanMove = true
      if (!cell1?.figure&&!cell2?.figure) cell2.isCanMove = true
    } else {
      const cell = getCell(target.x, target.y + diff)
      if (!cell?.figure) cell.isCanMove = true
      cell.isCanMove = true
    }
    const leftCell = getCell(target.x-1,target.y+diff)
    const rightCell = getCell(target.x+1,target.y+diff)
    
    if(leftCell?.figure) super.isEnemyFigure(leftCell)
    if(rightCell?.figure) super.isEnemyFigure(rightCell)
    
  }


}

export default Pawn