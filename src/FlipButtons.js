import classnames from "classnames";

export const FlipButtons = (props) => {
    const {cardIndex, cardCount, previousCardClick, nextCardClick, showCardClick} = props;

    return (
        <div className={"container"}>
            <div className={"row p-2"}>
                <div className={"col-6 mx-auto"}>
                    <div className={"row"}>
                        <button className={classnames("btn btn-primary m-2 col-3 mx-auto", {'disabled': cardIndex <= 0})}
                                onClick={previousCardClick}>Previous
                        </button>
                        <button className={"btn btn-success m-2 col-3 mx-auto"} onClick={showCardClick}>Show</button>
                        <button
                            className={classnames("btn btn-primary m-2 col-3 mx-auto", {'disabled': (cardIndex + 1) >= cardCount})}
                            onClick={nextCardClick}>Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}