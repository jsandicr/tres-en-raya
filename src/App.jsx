import confetti from "canvas-confetti"
import { useState } from 'react'
import './App.css'
import { Turn } from "./components/Turn"
import { WinnerModal } from "./components/WinnerModal.jsx"
import { Board } from "./components/Board.jsx"
import { turns } from "./constants.js"
import { checkWinner } from "./logic/board"
import { ResetBtn } from "./components/ResetBtn"

function App() {
  const[ board, setBoard ] = useState(()=>{
      const boardStorage = window.localStorage.getItem('board')
      return boardStorage ? JSON.parse(boardStorage) : Array(9).fill(null)
    })

  const [ turn, setTurn ] = useState(()=>{
    const turnStorage = window.localStorage.getItem('turn')
    return turnStorage ?? turns.x
  })

  const [ winner, setWinner ] = useState(null)

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }

  const updateBoard = (index) => {
    if(board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn == turns.x ? turns.o : turns.x
    setTurn(newTurn)

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
    
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <ResetBtn setBoard={setBoard} setTurn={setTurn} setWinner={setWinner} turns={turns}>
        Reiniciar el juego
      </ResetBtn>
      
      <Board board={board} updateBoard={updateBoard} />

      <Turn turn={turn} turns={turns} />

      <WinnerModal winner={winner}>
        <ResetBtn setBoard={setBoard} setTurn={setTurn} setWinner={setWinner} turns={turns}>
          Empezar de nuevo
        </ResetBtn>
      </WinnerModal>
    
    </main>
  )
}

export default App
