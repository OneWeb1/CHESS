import { Figure, FigureNames } from "./Figure.js"

class Rook extends Figure {
  constructor(color, cell) {
    super(color, cell)
    Object.assign(this, { color, cell })
    this.src = `./src/assets/${color}-rook.png`
    this.name = FigureNames.ROOK
    this.cell.figure = this
  }

  move(target) {
    super.horizontalAndVertical(target)
  }
}

export default Rook
