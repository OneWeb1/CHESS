class Cell {
  constructor(board, x, y, color, figure) {
    Object.assign(this, {board, x, y, color, figure})
    this.selected = false
    this.isCanMove = false
  }
  
  removeCanMove() {
    this.board.cells.forEach(row=> {
      row.forEach(cell=> {
        cell.isCanMove = false
        cell.isBeat = false
      })
    })
  }
  
}

export default Cell
