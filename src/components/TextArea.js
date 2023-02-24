import React from "react";

function TextArea() {
    return (
        <React.Fragment>
            <span className="labelTitulo">Escribir sobre:</span>
            <textarea id="textAreaBlog" className='form-control txtArea' placeholder='Separa tus ideas, con una " , "'></textarea>
        </React.Fragment>
    );
}

export {TextArea};