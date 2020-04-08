import React, { useState, Fragment } from 'react'
import Board from './Board.component'
import { calculateWinner } from '../calculateWinner.helper'
const style = {
  witdh: '200px',
  margin: '20px auto',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
}
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const winner = calculateWinner(board)
  const handleClick = i => {
    const boardCopy = [...board]
    if (winner || board[i]) {
      return
    }
    boardCopy[i] = xIsNext ? 'X' : 'O'
    setBoard(boardCopy)
    setXIsNext(!xIsNext)
  }
  const renderMoves = () => (
    <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
  )
  return (
    <Fragment>
      <Board onClick={handleClick} squares={board} />
      <div style={style}>
        <p>
          {winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`}
        </p>
        {renderMoves()}
      </div>
    </Fragment>
  )
}
export default Game
