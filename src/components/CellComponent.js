import { FigureNames } from "./../model/figures/Figure.js"

class CellComponent {
  constructor(boardComponent, cell) {
    Object.assign(this, { boardComponent, cell })
    this.node = this.boardComponent.root
    this.board = this.boardComponent.board
    this.root = null
    this.render()
  }

  click() {
    if (!this.cell.figure || this.cell.figure.color !== this.board.currentPlayer) return
    if (this.board.selectedCell) {
      if (this.board.selectedCell !== this.cell) {
        this.cell.removeCanMove()
        this.board.selectedCell.selected = false
      }
    }
    if (this.cell.selected) {
      this.cell.removeCanMove()
      this.cell.selected = false
    } else {
      this.cell.figure.move(this.cell)
      this.cell.selected = true
    }
    this.board.selectedCell = this.cell
    this.board.refresh(this.boardComponent)
  }

  move(e) {
    if (this.board.selectedCell.figure.name === FigureNames.PAWN) {
      this.board.selectedCell.figure.firstMove = true
    }
    this.cell.figure = this.board.selectedCell.figure
    this.board.selectedCell.figure = null
    this.board.selectedCell.selected = false
    this.cell.removeCanMove()
    this.board.selectedCell = null
    this.board.swapPlayer()
    this.board.refresh(this.boardComponent)
  }
  
  beatFigure() {
    this.board.addLostFigure(this.cell.figure)
    this.move()
  }

  render() {
    this.root = document.createElement("div")
    this.root.classList.add("cell")
    this.root.classList.add(this.cell.color)
    if (this.cell.figure) {
      const img = document.createElement("img")
      img.src = this.cell.figure.src
      this.root.appendChild(img)
    }
    if (this.cell.selected) this.root.classList.add("select-cell")
    if(this.cell.isBeat) {
      this.root.classList.add("beat")
      this.root.addEventListener("click", e=> this.beatFigure())
    }
    if (this.cell.isCanMove) {
      const div = document.createElement("div")
      const circle = document.createElement("div")
      div.classList.add("highlight-canmove")
      circle.classList.add("circle")
      div.appendChild(circle)
      div.addEventListener("click", e => this.move(e))
      this.root.appendChild(div)
    }
    this.root.addEventListener("click", e => this.click())
    this.node.appendChild(this.root)
  }
}

export default CellComponent
