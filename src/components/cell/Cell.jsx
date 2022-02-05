import React from "react";
import "./Cell.css";

function Cell(props) {
    return (
        <div>
            <div className={props.className} onClick={() => props.onClick(props.num)}>{props.cells[props.num]}</div>
        </div>
    );
}

export default Cell