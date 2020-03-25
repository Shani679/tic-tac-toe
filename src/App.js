import React, { useState, useCallback, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import { Square } from './Square';
import {MyButton} from './Button';

const Board = styled.div`
  width: 300px;
  height: 300px;
  display: grid;
  grid-template-columns: auto auto auto;
  > div{
    width: 100px;
    height: 100px;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
    cursor: pointer;
  }
`
const App = () => {

  const [isX, setIsX] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(false));
  const [count, setCount] = useState(0);

  const calculateWinner = useCallback(() => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }, [board])

  useEffect(() => {
    const winner = calculateWinner();
    if(winner){
      alert(`The winner is ${winner}`)
    }
  }, [board, calculateWinner])

  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count])

  const onClickHandler = useCallback(index => {
    if(!board[index]){
      const updatedBoard = [...board];
      updatedBoard[index] = isX ? "X" : "O";
      setBoard(updatedBoard);
      setIsX(!isX);
    }
  }, [board, isX]);


  return (
    <div className="App">
      <Board>
        {
          board.map((el, i) => <Square key={i} index={i} onClickHandler={onClickHandler} value={el ? el : ""}/>)
        }
      </Board>
      <MyButton onClick={increment}/>
    </div>
  );
}

export default App;
