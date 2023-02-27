import React, { useState } from "react";
import FileSaver, { saveAs } from "file-saver";



function saveImage(imageUrl) {
    FileSaver.saveAs("https://cors-anywhere.herokuapp.com/" + imageUrl, "Image.png")
}




function ImagesDataReplicate({ imagesData = [] }) {

    return (
        <div className="row">
            {
                Array.from(imagesData).map((item, index) => (
                    <div key={index} className="col" style={{ minWidth: "100px", maxWidth: "500px" }}>
                        <div className="card card-response">

                            <img src={item} alt="#"></img>


                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="d-grid gap-2">
                                            <button class="btn btn-outline-dark" type="button" onClick={() => { saveImage(item) }}><i className="fa fa-download" ></i> Download</button>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-grid gap-2">
                                            <a className="btn btn-outline-dark" data-bs-toggle="tooltip" data-bs-placement="top" title="view image" href={item} target="_blank"><i class="fa fa-picture-o" aria-hidden="true"></i> View</a>
                                        </div>
                                    </div>
                                </div>



                            </div>

                        </div>
                    </div>
                ))
            }




        </div>
    )
}


export { ImagesDataReplicate }