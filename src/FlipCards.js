import {FlipCard} from "./FlipCard";

export const FlipCards = (props) => {
    const {cards, cardIndex, isShowing, showText} = props;

    const evenCard = cardIndex % 2 === 0 ?
        (<FlipCard isShowing showText={showText}
                   cards={cards} cardIndex={cardIndex}/>)
        : (<></>);
    const oddCard = cardIndex % 2 === 1 ?
        (<FlipCard isShowing showText={showText}
                   cards={cards} cardIndex={cardIndex}/>)
        : (<></>);

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-lg-6 col-md-12 mx-auto"}>
                    {evenCard}
                    {oddCard}
                </div>
            </div>
        </div>
    );
}