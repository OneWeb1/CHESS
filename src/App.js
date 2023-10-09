import Board from "./model/Board.js"
import BoardComponent from "./components/BoardComponent.js"

class Chess {
  constructor(node) {
    Object.assign(this,{node})
    this.board = null
    this.boardComponent = null
    
    this.restart()
  }
  
  restart() {
    this.board = new Board()
    this.boardComponent = new BoardComponent(this.node,this.board)
  }
}

export default Chess
