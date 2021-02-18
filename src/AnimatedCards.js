import {useState} from 'react';
import {FlipCard} from "./FlipCard";

export const AnimatedCards = () => {
    const [cardIndex, setCardIndex] = useState(0);
    const cards = [
        {item: "Hola", translation: "Hello"},
        {item: "Ir", translation: "To go"},
        {item: "Estar", translation: "To be"},
        {item: "El perro", translation: "The dog"},
        {item: "Feliz", translation: "Happy"},
    ];

    const nextCardClick = (index) => {
        setCardIndex(index + 1);
    }
    const previousCardClick = (index) => {
        setCardIndex(index - 1);
    }

    const evenCard = cardIndex % 2 === 0 ?
        (<FlipCard isShowing
                      cards={cards} cardIndex={cardIndex}
                      previousClick={() => previousCardClick(cardIndex)}
                      nextClick={() => nextCardClick(cardIndex)}/>)
        : (<></>);
    const oddCard = cardIndex % 2 === 1 ?
        (<FlipCard isShowing
                      cards={cards} cardIndex={cardIndex}
                      previousClick={() => previousCardClick(cardIndex)}
                      nextClick={() => nextCardClick(cardIndex)}/>)
        : (<></>);

    return (
        <>
            <h1>Flip Cards</h1>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-6 mx-auto"}>
                        {evenCard}
                        {oddCard}
                    </div>
                </div>
            </div>
        </>
    );
}