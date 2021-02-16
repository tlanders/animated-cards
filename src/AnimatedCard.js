export const AnimatedCard = (props) => {
    const cards = props.cards;
    const cardIndex = props.cardIndex;
    const theCard = cards[cardIndex];

    return (
        <div className="card slide-left">
            {/*<img src="..." className="card-img-top" alt="...">*/}
            <div className="card-body">
                <h2 className="card-title card-back">{theCard.title}</h2>
                <p className="card-text">{theCard.desc}</p>
                <div className={"row"}>
                    <a href="#" className="btn btn-primary col-4 m-2 mx-auto" onClick={props.previousClick}>Previous</a>
                    <a href="#" className="btn btn-primary col-4 m-2 mx-auto" onClick={props.nextClick}>Next</a>
                </div>
            </div>
        </div>
    );
}