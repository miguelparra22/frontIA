import React from "react";

function dowloadImage(url){
   console.log("Aun no lo puedes descargar.")
}

function ImagesData({ imagesData = [] }) {
    return (
        <div className="row">
            {  
                imagesData.map((item, index) => (
                    <div key={index} className="col" style={{minWidth:"200px"}}>
                        <div className="card">
                        <img src={item.url} alt="#"></img>
                            <div className="card-body">
                                <span className="fa fa-download" onClick={dowloadImage(item.url)}></span>
                            
                            </div>
                            
                        </div>
                    </div>
                ))
            }

           
        </div>
    )
}


export { ImagesData }