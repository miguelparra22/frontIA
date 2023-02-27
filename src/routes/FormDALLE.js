import React, { useState } from "react";
import { MenuLateral } from "../components/MenuLateral";
import { NavBarForm } from "../components/NavBar";
import { Configuration, OpenAIApi } from "openai";
import { Titulo } from "../components/Titulo";
import { ImagesData } from "../components/ImagesData";
import { Accordeon } from "../components/Accordeon";

const tituloDALLE = "Do you need ideas?"
const textoAccordeonGPT3 = <p>Travel: Create an image of a hotel room with a view of the sea in Hawaii during sunset, Draw an elegant and modern travel suitcase for a weekend getaway, Create an image of a traveler in an airport with a smile on their face and a suitcase in their hand.

    Technology: Draw a smartphone with a foldable screen and 108-megapixel rear camera, Create an image of a smart living room with a high-definition TV screen and surround sound system, Draw an ultra-thin laptop with a touch screen and latest-generation processor.

    Fashion: Create an image of a pastel-toned high-end gala dress with a big bow on the back, Draw a stylish and modern men's suit in gray and grey tones, Create an image of a pair of high-heeled shoes in red tones with a crystal ornament on the instep.

    Entertainment: Draw an image of a cinema room with a giant screen and comfortable seats, Create an image of a group of friends enjoying a night of board games at home, Draw a character from a science fiction movie in a futuristic environment

    Remember to avoid using words like "create" or "draw" at the beginning of the prompt to allow DALL-E more freedom to generate creative and realistic images. Also, make sure to keep the prompt clear and concise to help DALL-E better understand the request.</p>


const containerRespuesta = document.getElementById("response")



function FormDALLE() {

    const [result, setResults] = useState("");
    const [prompValue, setPromtValue] = useState("");
    const [format, setFormat] = useState("");
    const [countImages, setCountImages] = useState("");



    //const prompt = `Write contend type ${type} type contend , with ${mood} tone about ${topic}, considering the following:${style} and add a title or subject if required.\n##`

    const [cargando, setCargando] = useState(false);

    const configuracion = new Configuration({
        apiKey: "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",
    })

    const openai = new OpenAIApi(configuracion);

    const containerRespuesta = document.getElementById("response")

    const showForm = () => {
        const containerForm = document.querySelectorAll(".formGpt3")
        containerForm.forEach(function(element){
            element.style.display = "block"
        })
        containerRespuesta.style.display = "none";
       document.onload()
    }
    const byeForm = () => {
        const containerForm = document.querySelectorAll(".formGpt3")
        containerForm.forEach(function(element){
            element.style.display = "none"
        })
        
    }

    const HandleSubmit = (e) => {
        setCargando(true)

        openai.createImage({
            prompt: prompValue,
            n: parseInt(countImages),
            size: format
        }).then((res) => {
            if (res.status === 200) {
                setCargando(false);
                byeForm()
                setResults(res.data)
                containerRespuesta.style.display = "block"
            }
        }).catch((err) => {
            console.log(e, "Ocurrio un error")
        })
    }


    return (

        <React.Fragment>

            <section id="main">
                <NavBarForm />
                <MenuLateral />
                <div className='containerBlog'>
                    <div className='formBlog'>
                        <div className="IconsAndTitle">

                        </div>
                        <Titulo value="IMAGES'S CREATOR DALL-E" />
                        <div className='row'>
                            <div className="col-md-9 m-auto mb-3 mt-3">
                                <div className="row">
                                    <div className="col-md-6 formGpt3">
                                        <h4 className="text-white">Select the image format</h4>
                                        <select className="selectForm" onChange={(e) => setFormat(e.target.value)}>
                                            <option value="" disabled="true" selected>Select an option</option>
                                            <option>1024x1024</option>
                                            <option>512x512</option>
                                            <option>256x256</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 formGpt3">
                                        <h4 className="text-white">number of images</h4>
                                        <select className="selectForm" onChange={(e) => setCountImages(e.target.value)}>
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

                            <div className='col-md-12 mb-3 formGpt3'>
                                <h3>Write your idea</h3>
                                <textarea className='form-control txtArea' style={{ height: "250px" }} onChange={(e) => setPromtValue(e.target.value)}></textarea>
                            </div>


                            <div className="col-md-6 mb-3 m-auto formGpt3">

                                <div className='col-md-12'>
                                    <div className="row botonesContainer">
                                        <div class="d-grid gap-2">
                                            <button className='btn btnEnviarOutlineDark' onClick={HandleSubmit}>{cargando ? " Loading, please wait ..." : "Enviar"}</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="spinnerContainer  mt-5 text-center" id="containerLoader">
                                        <span className={cargando ? "loader" : "Send"}></span>

                                    </div>
                                </div>


                            </div>

                        </div>


                        <div className="container" id="response" >
                            <div className="row">

                                <div className="col-md-6 m-auto mb-4">
                                    <div class="d-grid gap-2">
                                    <button className="btn btn-outline-light" id="reload" onClick={showForm}>Generate new image <span className="fa fa-plus"></span></button>
                                    </div>
                                   
                                </div>

                            </div>
                            <ImagesData imagesData={result.data}></ImagesData>
                        </div>

                        <div className="col-md-12">
                            <hr></hr>
                            <Accordeon titulo={tituloDALLE} textoAccordeon={textoAccordeonGPT3} />
                        </div>
                    </div>
                </div>
            </section>



        </React.Fragment>
    )
}


export { FormDALLE }