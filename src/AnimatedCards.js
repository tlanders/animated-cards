import {useState, useEffect} from 'react';
import {FlipButtons} from "./FlipButtons";
import {FlipCards} from "./FlipCards";

export const AnimatedCards = () => {
    const [cardIndex, setCardIndex] = useState(0);
    const [showText, setShowText] = useState(false);
    // const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // const [isLoading, setIsLoading] = useState(true);
    const [retryLoad, setRetryLoad] = useState(false);

    // useEffect(async () => {
    //     try {
    //         const res = await fetch("/api/cards");
    //         const data = await res.json();
    //         setCards(data);
    //         console.log('useEffect - len=' + data.length);
    //         setIsLoading(data.length <= 0);
    //         // setTimeout(() => setRetryLoad(!retryLoad), 15000);
    //     } catch(e) {
    //         // retry every 5 seconds if get an API error
    //         console.error('card API failure=' + e);
    //         setIsLoading(true);
    //         setTimeout(() => setRetryLoad(!retryLoad), 5000);
    //     }
    // }, [retryLoad]);

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

    return !isLoading ?
        (
            <>
                <h1>Flip Cards</h1>
                <FlipButtons {...{cardIndex, cardCount, nextCardClick, previousCardClick, showCardClick}}/>
                <FlipCards {...{showText, cardIndex, cards}}/>
            </>
        )
        : (
            <>
            <h1>Loading Flip Cards...</h1>
            <div className="spinner-grow text-success m-3" role="status"><span className="sr-only">Loading...</span></div>
            </>
        );
}