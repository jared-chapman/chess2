import React, { useState, useEffect } from 'react';
import Square from "../Square/Square.js"
import "./Board.css"


const Board = (props) => {
    const [board, setBoard] = useState(props.board)

    return(
        <div className="BoardMain">
            {board.map((row) => {
                return(
                    <div className="row">
                        {row.map((square) => {
                            return(
                                <Square
                                    color={square}
                                />
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )



}


export default Board;