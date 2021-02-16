export const AnimatedCard = () => {
    return (
        <div className="card slide-left">
            {/*<img src="..." className="card-img-top" alt="...">*/}
            <div className="card-body">
                <h2 className="card-title card-back">Card title</h2>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dicta ex provident
                    quos reiciendis. Possimus!</p>
                <div className={"row"}>
                    <a href="#" className="btn btn-primary col-4 m-2 mx-auto">Previous</a>
                    <a href="#" className="btn btn-primary col-4 m-2 mx-auto">Next</a>
                </div>
            </div>
        </div>
    );
}