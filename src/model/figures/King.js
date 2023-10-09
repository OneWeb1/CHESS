

import {Figure,FigureNames} from "./Figure.js"

class King extends Figure {
  constructor(color, cell) {
    super(color,cell)
    Object.assign(this, { color, cell })
    this.src = `./src/assets/${color}-king.png`
    this.name = FigureNames.KING
    this.cell.figure = this
  }
  
  move() {
  
  }
}

export default King
  
