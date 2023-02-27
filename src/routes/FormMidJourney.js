import React from "react";
import { NavBar2 } from "../components/NavBar2";
import imageExample from "../Assets/wallpaper.jpg"
import { MenuLateral } from "../components/MenuLateral";
import "../Assets/Desings/navBarDesing.css"
import "../Assets/Desings/formMidJourney.css"
import { predict } from "replicate-api";


function FormMidJourney() {

 
    return (
        <React.Fragment>
            <MenuLateral></MenuLateral>
            <section className="containerForm" id="main">
                <NavBar2></NavBar2>
                <div className="formMidJourney m-auto mt-5">
                    <h1>MidJourney</h1>
                    <div className="row">
                        {/** Form */}
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12 p-3">
                                    <label>Chose format image</label>
                                    <select>
                                        <option value="" disabled="true" selected>Select an option</option>
                                        <option>1024x1024</option>
                                        <option>512x512</option>
                                        <option>256x256</option>
                                    </select>
                                </div>
                                <div className="col-md-12 p-3">
                                    <label>Chose format image</label>
                                    <select className="selectForm">
                                        <option value="" disabled="true" selected>Select an option</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mt-4">
                            <h5>Write your idea</h5>
                            <textarea placeholder="Enter your idea."></textarea>
                        </div>
                        <div className="col-md-3 m-auto mt-3">
                            <div class="d-grid gap-2">
                                <button class="btn buttonEnviar" type="button" >Send</button>
                            </div>
                        </div>
                        {/** Response */}
                        <div className="container m-auto">
                            <h2>Your response is.</h2>
                            <div className="row">
                                <div className="col" style={{ minWidth: "300px", maxWidth: "200px" }}>
                                    <div className="card card-response">
                                        <img src={imageExample} alt="#"></img>
                                        <div className="card-body">

                                            <button className="btn" data-bs-toggle="tooltip" data-bs-placement="top" title="download image"> <span className="fa fa-download"></span></button>
                                            <button className="btn " data-bs-toggle="tooltip" data-bs-placement="top" title="view image"><i class="fa fa-picture-o" aria-hidden="true"></i></button>

                                            <span className="fa fa-download" ></span>

                                        </div>

                                    </div>


                                </div>
                                <div className="col" style={{ minWidth: "100px", maxWidth: "300px" }}>
                                    <div className="card card-response">
                                        <img src={imageExample} alt="#"></img>
                                        <div className="card-body">

                                            <button className="btn" data-bs-toggle="tooltip" data-bs-placement="top" title="download image"> <span className="fa fa-download"></span></button>
                                            <button className="btn " data-bs-toggle="tooltip" data-bs-placement="top" title="view image"><i class="fa fa-picture-o" aria-hidden="true"></i></button>

                                            <span className="fa fa-download" ></span>

                                        </div>

                                    </div>


                                </div>
                                <div className="col" style={{ minWidth: "100px", maxWidth: "300px" }}>
                                    <div className="card card-response">
                                        <img src={imageExample} alt="#"></img>
                                        <div className="card-body">

                                            <button className="btn" data-bs-toggle="tooltip" data-bs-placement="top" title="download image"> <span className="fa fa-download"></span></button>
                                            <button className="btn " data-bs-toggle="tooltip" data-bs-placement="top" title="view image"><i class="fa fa-picture-o" aria-hidden="true"></i></button>

                                            <span className="fa fa-download" ></span>

                                        </div>

                                    </div>


                                </div>
                                <div className="col" style={{ minWidth: "100px", maxWidth: "300px" }}>
                                    <div className="card card-response">
                                        <img src={imageExample} alt="#"></img>
                                        <div className="card-body">

                                            <button className="btn" data-bs-toggle="tooltip" data-bs-placement="top" title="download image"> <span className="fa fa-download"></span></button>
                                            <button className="btn " data-bs-toggle="tooltip" data-bs-placement="top" title="view image"><i class="fa fa-picture-o" aria-hidden="true"></i></button>

                                            <span className="fa fa-download" ></span>

                                        </div>

                                    </div>


                                </div>
                                <div className="col" style={{ minWidth: "100px", maxWidth: "300px" }}>
                                    <div className="card card-response">
                                        <img src={imageExample} alt="#"></img>
                                        <div className="card-body">

                                            <button className="btn" data-bs-toggle="tooltip" data-bs-placement="top" title="download image"> <span className="fa fa-download"></span></button>
                                            <button className="btn " data-bs-toggle="tooltip" data-bs-placement="top" title="view image"><i class="fa fa-picture-o" aria-hidden="true"></i></button>

                                            <span className="fa fa-download" ></span>

                                        </div>

                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
           
        </React.Fragment>
    )
}


export { FormMidJourney }