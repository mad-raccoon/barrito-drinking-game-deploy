import React from "react";
import "./ScoreArea.css";

const ScoreCard =({value, suit})=> {
    const isRed = ['hearts', 'diamonds'].includes(suit);
    return <div className={`score-card ${isRed? 'red': ''}`}>{value}</div>
}

const ScoreArea =({playedCards})=> {
    return <div className="score-area">
        <div className="score-area-list">
                {playedCards.map((card)=> <ScoreCard key={card} {...card}/>)}
        </div>
        <div className="score-area-total"> 
            {playedCards.length}
        </div>
    </div>
}

export default ScoreArea;