import './App.css';
import ScoreArea from './components/ScoreArea/ScoreArea';
import ActionArea from './components/ActionArea/ActionArea';
import GameArea from './components/GameArea/GameArea';
import { useState } from 'react';
import { getSuffledDeck } from './utils/deck';
import {barritoSound, doubleBarritoSound, winSound, drinkSound} from "./assets/sounds";

const deck = getSuffledDeck();

function App() {
  const [moveNumber, setMoveNumber] = useState(0);
  const [playedCards, setPlayedCards] = useState([]);
  const [playFeedback, setPlayFeedback] = useState(true);


  const handleAction=(actionType)=>{

    let feedback = false;
    let soundToPlay = drinkSound;

    if(!playFeedback) {
      setPlayedCards([])
    }

    
    if(["UP", "DOWN", "RED", "BLACK"].includes(actionType)) {
        const currentCard = deck[moveNumber];
        const nextCard = deck[moveNumber + 1]
    
        if(actionType === "UP") {
          feedback = currentCard.score <= nextCard.score;
        }
    
        if(actionType === "DOWN") {
          feedback = currentCard.score >= nextCard.score;
        }

        if(actionType === "RED") {
          feedback = ["diamonds", "hearts"].includes(nextCard.suit);
        }

        if(actionType === "BLACK") {
          feedback = ["spades", "clubs"].includes(nextCard.suit);
        }
      
        feedback && (soundToPlay = winSound);
        setPlayedCards(prevState=>[deck[moveNumber], ...prevState,])
        setMoveNumber(prevState => prevState + 1)
      }

    if(["BARRITO", "DOUBLE_BARRITO"].includes(actionType)) {
      const nextCardsNumber = actionType === "BARRITO" ? 2 : 4;
      const nextCards = deck.splice(moveNumber, nextCardsNumber);
      
      feedback = nextCards.filter(card=>["diamonds", "hearts"].includes(card.suit)).length === (nextCardsNumber / 2);
      
      if(feedback){
        nextCardsNumber === 2 && (soundToPlay = barritoSound);
        nextCardsNumber === 4 && (soundToPlay = doubleBarritoSound);
      }

      setPlayedCards(prevState=>[...nextCards, ...prevState])
      setMoveNumber(prevState => prevState + nextCardsNumber)
    }

    const audio = new Audio(soundToPlay);
    audio.play();

    setPlayFeedback(feedback);
  }

  return (
    <>
      <ScoreArea playedCards={playedCards}/>
      <GameArea currentCard={deck[moveNumber]} feedback={playFeedback}/>
      <ActionArea onAction={handleAction}/>
    </>
  );
}

export default App;
