import React, { useState, useEffect } from 'react';
import "./Square.css"

const Square = (props) => {
    return (
        <button 
            className="square"
            style = {props.color ? {background: "#AD91A3"} : {background: "#EDAF97"}}
            >
        </button>
    )
}

export default Square;