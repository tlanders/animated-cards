import classnames from 'classnames';
import {useState} from 'react';

export const FlipCard = (props) => {
    const {cards, cardIndex, isShowing, nextClick, previousClick} = props;
    const theCard = cards[cardIndex];
    const [showValue, setShowValue] = useState(false);

    const showClick = () => {
        setShowValue(true);
    }

    const onNextClick = () => {
        setShowValue(false);
        nextClick();
    }

    const onPrevClick = () => {
        setShowValue(false);
        previousClick();
    }

    return (
        <div className={classnames('card',
            {'front-card swing-in-top-fwd' : isShowing},
            {'back-card swing-out-top-bck' : !isShowing})}>
            {/*{'front-card fade-in' : isShowing},*/}
            {/*{'back-card' : !isShowing})}>*/}
            <div className="card-body">
                <div className={"p-3 bg-light"}>
                    <h5 className="card-title card-back">{theCard.item}</h5>
                    {showValue && (<h6 className="card-text m-4 text-focus-in">{theCard.translation}</h6>)}
                    {!showValue && (<h6 className="card-text m-4">&nbsp;</h6>)}
                    <button className={"btn btn-success col-4"} onClick={showClick}>Show</button>
                </div>
                <div className={"row"}>
                    <a href="#"
                       className={classnames('btn btn-primary col-4 m-2 mx-auto',
                           {'disabled' : cardIndex <= 0})}
                       onClick={onPrevClick}>Previous</a>
                    <a href="#"
                       className={classnames('btn btn-primary col-4 m-2 mx-auto',
                           {'disabled' : cardIndex >= (cards.length - 1)})}
                       onClick={onNextClick}>Next</a>
                </div>
            </div>
        </div>
    );
}