import React from "react";
import "./Win.css";

function Win(props) {
    return (
        <div>
            <h2>"<span>{props.winner}</span>" Won</h2>
            <button className="button playAgain" onClick={props.onPlayAgain}>Play Again</button>
        </div>
    );
}

export default Win;