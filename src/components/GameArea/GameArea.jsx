import Card from "../Card/Card";
import "./GameArea.css";

const GameArea =({currentCard, feedback})=> {
    return <div className={`game-area ${feedback? 'valid': 'not-valid'}`}>
        <Card {...currentCard}/>
    </div>
}

export default GameArea;