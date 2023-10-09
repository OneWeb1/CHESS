import CellComponent from "./CellComponent.js"

class BoardComponent {
  constructor(node,board) {
    Object.assign(this, { node,board })
    this.root = null

    this.render(this.board)
  }

  generateCells() {
    this.cells.forEach(row => {
      row.forEach(cell => {
        new CellComponent(this, cell)
      })
    })
  }

  render(board) {
    this.cells = board.cells
    this.root = document.createElement("div")
    this.root.classList.add("board")
    this.generateCells()
    this.node.innerHTML = ""
    this.node.appendChild(this.root)
  }
}

export default BoardComponent
