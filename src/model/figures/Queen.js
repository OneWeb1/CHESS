import {Figure,FigureNames} from "./Figure.js"

class Queen extends Figure {
  constructor(color, cell) {
    super(color,cell)
    Object.assign(this, { color, cell })
    this.src = `./src/assets/${color}-queen.png`
    this.name = FigureNames.QUEEN
    this.cell.figure = this
  }
  
  move(target) {
    super.diagonal(target)
    super.horizontalAndVertical(target)
  }
}

export default Queen
  
