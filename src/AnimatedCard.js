import classnames from 'classnames';
import $ from 'jquery';
import {useState} from 'react';

export const AnimatedCard = (props) => {
    const {cards, cardIndex, isPrevious, isNext} = props;
    const theCard = cards[cardIndex];
    const [toggle, setToggle] = useState(true);

    const myNextClick = () => {
        props.nextClick();
        if(toggle) {
            $('.current-card').removeClass('fade-in-out');
            $('.current-card').addClass('fade-in-out2');
            console.log('myNextClick1, index=', cardIndex);
        } else {
            $('.current-card').removeClass('fade-in-out2');
            $('.current-card').addClass('fade-in-out');
            console.log('myNextClick2, index=', cardIndex);
        }
        setToggle(!toggle);
    }

    return (
        <div className={classnames('card fade-in-out',
                {'current-card' : !isNext && !isPrevious},
                {'next-card' : isNext},
                {'prev-card' : isPrevious})}>
            {/*<img src="..." className="card-img-top" alt="...">*/}
            <div className="card-body">
                <h2 className="card-title card-back">{theCard.title}</h2>
                <p className="card-text">{theCard.desc}</p>
                <div className={"row"}>
                    <a href="#"
                       className={classnames('btn btn-primary col-4 m-2 mx-auto',
                           {'disabled' : cardIndex <= 0})}
                       onClick={props.previousClick}>Previous</a>
                    <a href="#"
                       className={classnames('btn btn-primary col-4 m-2 mx-auto',
                           {'disabled' : cardIndex >= (cards.length - 1)})}
                       onClick={myNextClick}>Next</a>
                </div>
            </div>
        </div>
    );
}