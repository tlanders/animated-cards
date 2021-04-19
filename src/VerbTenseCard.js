export const VerbTenseCard = (props) => {
    const {tenseTitle, tenseData} = props;
    const collapseId = "collapse" + tenseTitle;
    const accordianId = "accordion" + tenseTitle;
    const headingId = "heading" + tenseTitle;
    return (
        <div className="accordion" id={accordianId}>
            <div className="card">
                <div className="card-header" id={headingId}>
                    <h2 className="mb-0">
                        <button className="btn btn-link btn-block text-center" type="button"
                                data-toggle="collapse" data-target={"#" + collapseId}
                                aria-expanded="true" aria-controls={"#" + collapseId}>
                            {tenseTitle}
                        </button>
                    </h2>
                </div>

                <div id={collapseId} className="collapse" aria-labelledby={headingId}
                     data-parent={"#" + accordianId}>
                    <div className="card-body">
                        {tenseData.info && (<p className={"font-italic"}>{tenseData.info}</p>)}
                        <div className={"row"}>
                            <div className={"col-6"}>
                                <p>
                                    <span className={"text-muted"}>yo</span> {tenseData.conjugations.yo}<br/>
                                    <span className={"text-muted"}>tu</span> {tenseData.conjugations.tu}<br/>
                                    <span className={"text-muted"}>el</span> {tenseData.conjugations.el}
                                </p>
                            </div>
                            <div className={"col-6"}>
                                <p>
                                    <span className={"text-muted"}>nosotros</span> {tenseData.conjugations.nosotros}<br/>
                                    <span className={"text-muted"}>ellos / ustedes</span> {tenseData.conjugations.ellos}
                                </p>
                            </div>
                            {tenseData.example && (
                                <div className={"col-12"}>
                                    <p className="card-text">{tenseData.example}<br/>
                                        <span className={"font-italic"}>{tenseData.exampleTranslation}</span>
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
