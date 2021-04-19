import classnames from 'classnames';
import {VerbTenseCard} from "./VerbTenseCard";

// function VerbTenseCard() {
//     return <div className="accordion" id="accordion2">
//         <div className="card">
//             <div className="card-header" id="heading2">
//                 <h2 className="mb-0">
//                     <button className="btn btn-link btn-block text-center" type="button"
//                             data-toggle="collapse" data-target="#collapse2"
//                             aria-expanded="true" aria-controls="collapse2">
//                         Preterite Tense
//                     </button>
//                 </h2>
//             </div>
//
//             <div id="collapse2" className="collapse" aria-labelledby="heading2"
//                  data-parent="#accordion2">
//                 <div className="card-body">
//                     <p className={"font-italic"}>i &rarr; ie</p>
//                     <div className={"row"}>
//                         <div className={"col-6"}>
//                             <p>
//                                 <span className={"text-muted"}>yo</span> trabaje<br/>
//                                 <span className={"text-muted"}>tu</span> trabajaste<br/>
//                                 <span className={"text-muted"}>el</span> trabajo
//                             </p>
//                         </div>
//                         <div className={"col-6"}>
//                             <p>
//                                 <span className={"text-muted"}>nosotros</span> trabajamos<br/>
//                                 <span className={"text-muted"}>ellos / ustedes</span> trabajaron
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>;
// }

export const FlipCard = (props) => {
    const {cards, cardIndex, isShowing, showText} = props;
    const theCard = cards[cardIndex];

    theCard.example = 'Hola mi amigo'
    theCard.exampleTranslation = 'Hello my friend'

    const testCard = {
        item: "estar",
        translation: "To be",
        example: "Estoy triste",
        exampleTranslation: "I am sad",
        type: "verb",
        subType: "irregular",
        verbTenses: {
            "present": {
                conjugations: {
                    "yo": "estoy",
                    "tu": "estas",
                    "el": "esta",
                    "nosotros": "estamos",
                    "ellos": "estan"
                },
                example: "Estamos en la tienda",
                exampleTranslation: "We are in the store",
            },
            "preterite": {
                conjugations: {
                    "yo": "estuve",
                    "tu": "estuviste",
                    "el": "estuvo",
                    "nosotros": "estuvamos",
                    "ellos": "estuvan"
                },
                info: "i → ie",
                example: "Estuviste feliz ayer?",
                exampleTranslation: "Were you happy yesterday?",
            },
            "imperfect": {
                conjugations: {
                    "yo": "estaba",
                    "tu": "estabas",
                    "el": "estaba",
                    "nosotros": "estabamos",
                    "ellos": "estaban"
                },
                info: "o → ue",
                example: "De nino estaba loco",
                exampleTranslation: "As a child I was crazy",
            }
        },
        relatedItems: [
            "ser"
        ]
    };
    //     {item: "Hola", translation: "Hello"},
    //     {item: "Ir", translation: "To go"},
    //     {item: "Estar", translation: "To be"},
    //     {item: "El perro", translation: "The dog"},
    //     {item: "Feliz", translation: "Happy"},
    // ];

    let extraInfo = ''
    if(showText) {
        extraInfo = (
            <div className={"text-focus-in"}>
                <div className={"row p-1"}>
                    <div className={"col-12"}>
                        <VerbTenseCard tenseTitle={"present"}
                            tenseData={testCard.verbTenses["present"]}/>
                    </div>
                </div>

                <div className={"row p-1"}>
                    <div className={"col-12"}>
                        <VerbTenseCard tenseTitle={"preterite"}
                            tenseData={testCard.verbTenses["preterite"]}/>
                    </div>
                </div>

                <div className={"row p-1"}>
                    <div className={"col-12"}>
                        <VerbTenseCard tenseTitle={"imperfect"}
                            tenseData={testCard.verbTenses["imperfect"]}/>
                    </div>
                </div>

                <div className={"row p-1"}>
                    <div className={"col-12"}>
                        <div className="accordion" id="accordion3">
                            <div className="card">
                                <div className="card-header" id="heading3">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link btn-block text-center" type="button"
                                                data-toggle="collapse" data-target="#collapse3"
                                                aria-expanded="true" aria-controls="collapse3">
                                            Related Cards
                                        </button>
                                    </h2>
                                </div>

                                <div id="collapse3" className="collapse" aria-labelledby="heading3"
                                     data-parent="#accordion3">
                                    <div className="card-body">
                                        <ul>
                                            <li><a href={"/ser"}>ser</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={classnames('card',
            {'front-card swing-in-top-fwd' : isShowing},
            {'back-card swing-out-top-bck' : !isShowing})}>
            <div className="card-body">
                <div className={"p-3 bg-light"}>
                    <h5 className="card-title card-back">{theCard.item}</h5>
                    {showText && (<h6 className="card-text text-focus-in">{theCard.translation}</h6>)}
                    {showText && theCard.example && (
                        <p className="card-text text-focus-in">{theCard.example}<br/>
                            <span className={"font-italic"}>{theCard.exampleTranslation}</span>
                        </p>
                    )}
                    {!showText && (<h6 className="card-text">&nbsp;</h6>)}
                    {extraInfo}
                </div>
            </div>
        </div>
    );
}