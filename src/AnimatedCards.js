import {useState} from 'react';
import {FlipButtons} from "./FlipButtons";
import {FlipCards} from "./FlipCards";

export const AnimatedCards = () => {
    const [cardIndex, setCardIndex] = useState(0);
    const [showText, setShowText] = useState(false);

    const cards = [
        {item: "Hola", translation: "Hello"},
        {item: "Ir", translation: "To go"},
        {item: "Estar", translation: "To be"},
        {item: "El perro", translation: "The dog"},
        {item: "Feliz", translation: "Happy"},
    ];

    const nextCardClick = () => {
        if((cardIndex + 1) < cards.length) {
            setShowText(false);
            setCardIndex(cardIndex + 1);
        }
    }
    const previousCardClick = () => {
        if(cardIndex > 0) {
            setShowText(false);
            setCardIndex(cardIndex - 1);
        }
    }

    const showCardClick = () => {
        setShowText(true);
    }

    const cardCount = cards.length;

    return (
        <>
            <h1>Flip Cards</h1>
            <FlipButtons {...{cardIndex, cardCount, nextCardClick, previousCardClick, showCardClick}}/>
            <FlipCards {...{showText, cardIndex, cards}}/>
        </>
    );
}