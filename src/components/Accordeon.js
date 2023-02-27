import React from "react";

function Accordeon(props) {
    return (

        <React.Fragment>
            <p className="text-center">
                <a className="linkAccordeon text-center" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                   {props.titulo}
                </a>
                
            </p>
            <div className="collapse" id="collapseExample">
                <div className="card card-body bg-dark text-white">
                {props.textoAccordeon}
                <button className="btn btn-outline-secondary " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Close
                </button>
                </div>
            </div>
            {/** <div className="accordion bg-primary" id="accordionFlushExample">
                <div className="accordion-item bg-dark text-white">
                    <h2 className="accordion-header text-center bg-dark" id="flush-headingOne">
                        <a className="accordion-button collapsed text-center" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            {props.titulo}
                        </a>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">  {props.textoAccordeon}</div>
                    </div>
                </div>
            </div>*/}
        </React.Fragment>

    );
}

export { Accordeon }