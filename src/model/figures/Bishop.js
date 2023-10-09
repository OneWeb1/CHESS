import { Figure, FigureNames } from "./Figure.js"

class Bishop extends Figure {
  constructor(color, cell) {
    super(color, cell)
    Object.assign(this, { color, cell })
    this.src = `./src/assets/${color}-bishop.png`
    this.name = FigureNames.BISHOP
    this.cell.figure = this
  }

  move(target) {
    super.diagonal(target)
  }
}

export default Bishop
