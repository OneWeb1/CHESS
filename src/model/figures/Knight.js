import { Figure, FigureNames } from "./Figure.js"

class Knight extends Figure {
  constructor(color, cell) {
    super(color, cell)
    Object.assign(this, { color, cell })
    this.src = `./src/assets/${color}-knight.png`
    this.name = FigureNames.KNIGHT
    this.cell.figure = this
  }

  move(target) {
    const getCell = this.cell.board.getCell.bind(this.cell.board)
    const x = target.x
    const y = target.y
    const topLeftCell = getCell(x - 1, y - 2)
    const topRightCell = getCell(x + 1, y - 2)
    const bottomLeftCell = getCell(x - 1, y + 2)
    const bottomRightCell = getCell(x + 1, y + 2)
    const topRLeftCell = getCell(x - 2, y - 1)
    const topRRightCell = getCell(x + 2, y - 1)
    const bottomRLeftCell = getCell(x - 2, y + 1)
    const bottomRRightCell = getCell(x + 2, y + 1)
    if (topLeftCell && !topLeftCell.figure) {
      topLeftCell.isCanMove = true
    } else super.isEnemyFigure(target)
    if (topRightCell && !topRightCell.figure) {
      topRightCell.isCanMove = true
    } else super.isEnemyFigure(target)
    if (bottomLeftCell && !bottomLeftCell.figure) {
      bottomLeftCell.isCanMove = true
    } else super.isEnemyFigure(target)
    if (bottomRightCell && !bottomRightCell.figure) {
      bottomRightCell.isCanMove = true
    } else super.isEnemyFigure(target)
    if (topRLeftCell && !topRLeftCell.figure) {
      topRLeftCell.isCanMove = true
    } else super.isEnemyFigure(target)
    if (topRRightCell && !topRRightCell.figure) {
      topRRightCell.isCanMove = true
    } else super.isEnemyFigure(target)
    if (bottomRLeftCell && !bottomRLeftCell.figure) {
      bottomRLeftCell.isCanMove = true
    } else super.isEnemyFigure(target)
    if (bottomRRightCell && !bottomRRightCell.figure) {
      bottomRRightCell.isCanMove = true
    } else super.isEnemyFigure(target)

  }
}

export default Knight