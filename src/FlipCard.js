import classnames from 'classnames';

export const FlipCard = (props) => {
    const {cards, cardIndex, isShowing, nextClick, previousClick} = props;
    const theCard = cards[cardIndex];

    return (
        <div className={classnames('card',
            {'front-card swing-in-top-fwd' : isShowing},
            {'back-card swing-out-top-bck' : !isShowing})}>
            {/*{'front-card fade-in' : isShowing},*/}
            {/*{'back-card' : !isShowing})}>*/}
            <div className="card-body">
                <h2 className="card-title card-back">{theCard.title}</h2>
                <p className="card-text">{theCard.desc}</p>
                <div className={"row"}>
                    <a href="#"
                       className={classnames('btn btn-primary col-4 m-2 mx-auto',
                           {'disabled' : cardIndex <= 0})}
                       onClick={previousClick}>Previous</a>
                    <a href="#"
                       className={classnames('btn btn-primary col-4 m-2 mx-auto',
                           {'disabled' : cardIndex >= (cards.length - 1)})}
                       onClick={nextClick}>Next</a>
                </div>
            </div>
        </div>
    );
}