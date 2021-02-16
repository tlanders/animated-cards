import {useState} from 'react';
import {AnimatedCard} from "./AnimatedCard";

export const AnimatedCards = () => {
    const [cardIndex, setCardIndex] = useState(0);
    const cards = [
        {title: "Card 0", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing."},
        {title: "Card 1", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum."},
        {title: "Card 2", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing."},
        {title: "Card 3", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum."},
        {title: "Card 4", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing."},
    ];

    const nextCardClick = (index) => {
        setCardIndex(index + 1);
    }
    const previousCardClick = (index) => {
        setCardIndex(index - 1);
    }

    const prevCard = cardIndex > 0 ?
        (<AnimatedCard isPrevious cards={cards} cardIndex={cardIndex - 1}
                      previousClick={() => previousCardClick(cardIndex - 1)}
                      nextClick={() => nextCardClick(cardIndex - 1)}/>)
        : (<></>);
    const nextCard = cardIndex < (cards.length - 1) ?
        (<AnimatedCard isNext cards={cards} cardIndex={cardIndex + 1}
                      previousClick={() => previousCardClick(cardIndex + 1)}
                      nextClick={() => nextCardClick(cardIndex + 1)}/>)
        : (<></>);

    return (
        <>
            <h1>Animated Cards</h1>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-6 mx-auto"}>
                        {prevCard}
                        <AnimatedCard cards={cards} cardIndex={cardIndex}
                                      previousClick={() => previousCardClick(cardIndex)}
                                      nextClick={() => nextCardClick(cardIndex)}/>
                        {nextCard}
                    </div>
                </div>
            </div>
        </>
    );
}