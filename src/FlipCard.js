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
                    <hr/>
                    <h6>Present Tense</h6>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <p>
                                <span className={"text-muted"}>yo</span> trabajo<br/>
                                <span className={"text-muted"}>tu</span> trabajas<br/>
                                <span className={"text-muted"}>el</span> trabaja
                            </p>
                        </div>
                        <div className={"col-6"}>
                            <p>
                                <span className={"text-muted"}>nosotros</span> trabajamos<br/>
                                <span className={"text-muted"}>ellos / ustedes</span> trabajan
                            </p>
                        </div>
                    </div>
                    <hr/>
                    <h6>Preterite Tense</h6>
                    <p className={"font-italic"}>i &rarr; ie</p>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <p>
                                <span className={"text-muted"}>yo</span> trabaje<br/>
                                <span className={"text-muted"}>tu</span> trabajaste<br/>
                                <span className={"text-muted"}>el</span> trabajo
                            </p>
                        </div>
                        <div className={"col-6"}>
                            <p>
                                <span className={"text-muted"}>nosotros</span> trabajamos<br/>
                                <span className={"text-muted"}>ellos / ustedes</span> trabajaron
                            </p>
                        </div>
                    </div>
                    <hr/>
                    <h6>Imperfect Tense</h6>
                    <p><span className={"text-muted font-italic"}>type:</span> o &rarr; ue</p>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <p>
                                <span className={"text-muted"}>yo</span> trabajaba<br/>
                                <span className={"text-muted"}>tu</span> trabajabas<br/>
                                <span className={"text-muted"}>el</span> trabajaba
                            </p>
                        </div>
                        <div className={"col-6"}>
                            <p>
                                <span className={"text-muted"}>nosotros</span> trabajamos<br/>
                                <span className={"text-muted"}>ellos / ustedes</span> trabajaban
                            </p>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-12"}>
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-center" type="button"
                                                    data-toggle="collapse" data-target="#collapseOne"
                                                    aria-expanded="true" aria-controls="collapseOne">
                                                Imperfect Tense
                                            </button>
                                        </h2>
                                    </div>

                                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne"
                                         data-parent="#accordionExample">
                                        <div className="card-body">
                                            <p className={"font-italic"}>o &rarr; ue</p>
                                            <div className={"row"}>
                                                <div className={"col-6"}>
                                                    <p>
                                                        <span className={"text-muted"}>yo</span> trabajaba<br/>
                                                        <span className={"text-muted"}>tu</span> trabajabas<br/>
                                                        <span className={"text-muted"}>el</span> trabajaba
                                                    </p>
                                                </div>
                                                <div className={"col-6"}>
                                                    <p>
                                                        <span className={"text-muted"}>nosotros</span> trabajamos<br/>
                                                        <span className={"text-muted"}>ellos / ustedes</span> trabajaban
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-12"}>
                            <div className="accordion" id="accordion2">
                                <div className="card">
                                    <div className="card-header" id="heading2">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-center" type="button"
                                                    data-toggle="collapse" data-target="#collapse2"
                                                    aria-expanded="true" aria-controls="collapse2">
                                                Preterite Tense
                                            </button>
                                        </h2>
                                    </div>

                                    <div id="collapse2" className="collapse" aria-labelledby="heading2"
                                         data-parent="#accordion2">
                                        <div className="card-body">
                                            <p className={"font-italic"}>i &rarr; ie</p>
                                            <div className={"row"}>
                                                <div className={"col-6"}>
                                                    <p>
                                                        <span className={"text-muted"}>yo</span> trabaje<br/>
                                                        <span className={"text-muted"}>tu</span> trabajaste<br/>
                                                        <span className={"text-muted"}>el</span> trabajo
                                                    </p>
                                                </div>
                                                <div className={"col-6"}>
                                                    <p>
                                                        <span className={"text-muted"}>nosotros</span> trabajamos<br/>
                                                        <span className={"text-muted"}>ellos / ustedes</span> trabajaron
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}