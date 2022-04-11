import React, { useState, useEffect } from 'react';
import Board from "../Board/Board.js"

const createDefaultBoard = ()  => {
    let defaultBoard = []
    for (let i=0; i<8; i++) {
        let row = []
        for (let j=0; j<8; j++){
            row.push((i+j)%2);
        }
        defaultBoard.push(row)
    }
    return defaultBoard;
}
const defaultBoard = createDefaultBoard();

const Game = () => {




    return (
        <Board 
            board={defaultBoard}
        />
    )

}

export default Game;