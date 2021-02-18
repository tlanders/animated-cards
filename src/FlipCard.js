import classnames from 'classnames';

export const FlipCard = (props) => {
    const {cards, cardIndex, isShowing, showText} = props;
    const theCard = cards[cardIndex];

    return (
        <div className={classnames('card',
            {'front-card swing-in-top-fwd' : isShowing},
            {'back-card swing-out-top-bck' : !isShowing})}>
            <div className="card-body">
                <div className={"p-3 bg-light"}>
                    <h5 className="card-title card-back">{theCard.item}</h5>
                    {showText && (<h6 className="card-text m-4 text-focus-in">{theCard.translation}</h6>)}
                    {!showText && (<h6 className="card-text m-4">&nbsp;</h6>)}
                </div>
            </div>
        </div>
    );
}