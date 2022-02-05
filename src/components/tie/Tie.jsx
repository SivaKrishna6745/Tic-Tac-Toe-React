import React from "react";
import "./Tie.css";

function Tie(props) {
    return (
        <div>
            <h2>It's a Draw</h2>
            <button className="button playAgain" onClick={props.onPlayAgain}>Play Again</button>
        </div>
    );
}

export default Tie;