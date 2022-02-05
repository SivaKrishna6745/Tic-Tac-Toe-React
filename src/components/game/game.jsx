import React, { useState } from "react";
import Cell from "../cell/Cell.jsx";
import Tie from "../tie/Tie.jsx";
import Win from "../win/Win.jsx";
import "./game.css";

function Game() {
    const[turn, setTurn] = useState("X");
    const [cells, setCells] = useState(Array(9).fill(""));
    const [winner, setWinner] = useState("");
    const winCombinations = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];
    function handleClick(num) {
        let squares = [...cells];
        if(winner) return;
        if(cells[num] !== '') return;
        if(turn === "X") setTurn("O");
        else if(turn === "O") setTurn("X");
        setCells(squares);
        squares[num] = turn;
        checkWin(squares);
    }
    function checkWin(squares) {
        winCombinations.forEach(combo => {
            if(squares[combo[0]] === '' || squares[combo[1]] === '' || squares[combo[2]] === '') return;
            else if(squares[combo[0]] === squares[combo[1]] && squares[combo[1]] === squares[combo[2]]) {
                setWinner(squares[combo[0]]);
            }
        });
    }
    function playAgain() {
        setWinner("");
        setCells(Array(9).fill(""));
        setTurn("X");
    }
    return (
        <div className="game">
            <header>
                <h1 className="header">Welcome to Tic-Tac-Toe Game</h1>
            </header>
            <h3>It is {turn}'s turn</h3>
            <div className="game-container">
                <Cell num={0} className="cell border-right border-bottom" onClick={handleClick} turn={turn} cells={cells} />
                <Cell num={1} className="cell border-right border-bottom" onClick={handleClick} turn={turn} cells={cells} />
                <Cell num={2} className="cell border-bottom" onClick={handleClick} turn={turn} cells={cells} />
                <Cell num={3} className="cell border-right border-bottom" onClick={handleClick} turn={turn} cells={cells} />
                <Cell num={4} className="cell border-right border-bottom" onClick={handleClick} turn={turn} cells={cells} />
                <Cell num={5} className="cell border-bottom" onClick={handleClick} turn={turn} cells={cells} />
                <Cell num={6} className="cell border-right" onClick={handleClick} turn={turn} cells={cells} />
                <Cell num={7} className="cell border-right" onClick={handleClick} turn={turn} cells={cells} />
                <Cell num={8} className="cell" onClick={handleClick} turn={turn} cells={cells} />
            </div>
            {winner && <Win winner={winner} onPlayAgain={playAgain} />}
            {(!winner && !cells.includes('')) && <Tie onPlayAgain={playAgain} />}
        </div>
    );
}

export default Game;