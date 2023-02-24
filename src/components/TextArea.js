import React from "react";

function TextArea() {
    return (
        <React.Fragment>
            <span className="labelTitulo">Write about:</span>
            <textarea id="textAreaBlog" className='form-control txtArea' placeholder='Separate your ideas, with a " , "'></textarea>
        </React.Fragment>
    );
}

export {TextArea};