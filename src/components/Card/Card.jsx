import React from "react";
import "./Card.css";

const Card =({value, suit})=> {
    return <div className="card">
        <div className="value">{value}</div>
        <div className="body">
            <div className={`suit ${suit}`}></div>
         </div> 
        </div>
}

export default Card;