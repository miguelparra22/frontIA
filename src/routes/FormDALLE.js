import React, { useState } from "react";
import { MenuLateral } from "../components/MenuLateral";
import { NavBarForm } from "../components/NavBar";
import { Configuration, OpenAIApi } from "openai";
import { Titulo } from "../components/Titulo";
import { TextArea } from "../components/TextArea";
import { ImagesData } from "../components/ImagesData";

const tituloGPT3 = "¿Necesitas Ideas?"
const textoAccordeonGPT3 = <p>Viajes: Crea una imagen de una habitación de hotel con vista al mar en Hawai durante el atardecer, Dibuja una maleta de viaje elegante y moderna para una escapada de fin de semana, Crea una imagen de un viajero en un aeropuerto con una sonrisa en su rostro y una maleta en la mano.

    Tecnología: Dibuja un teléfono inteligente con pantalla plegable y cámara trasera de 108 megapíxeles, Crea una imagen de una sala de estar inteligente con una pantalla de televisión de alta definición y un sistema de sonido envolvente, Dibuja un portátil ultradelgado con pantalla táctil y procesador de última generación.

    Moda: Crea una imagen de un vestido de gala de alta costura en tonos pastel con un gran lazo en la espalda, Dibuja un traje de hombre elegante y moderno en tonos grises y negros, Crea una imagen de un par de zapatos de tacón alto en tonos rojos con un adorno de cristal en el empeine.

    Entretenimiento: Dibuja una imagen de una sala de cine con una pantalla gigante y asientos cómodos, Crea una imagen de un grupo de amigos disfrutando de una noche de juegos de mesa en casa, Dibuja un personaje de una película de ciencia ficción en un entorno futurista</p>

const textoAccordeonTipo = () => {
    return textoAccordeonGPT3
}




function FormDALLE() {

    const [result, setResults] = useState("");
    const [prompValue, setPromtValue] = useState("");
    console.log(prompValue)


    //const prompt = `Write contend type ${type} type contend , with ${mood} tone about ${topic}, considering the following:${style} and add a title or subject if required.\n##`

    const [cargando, setCargando] = useState(false);

    const configuracion = new Configuration({
        apiKey: "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",
    })

    const openai = new OpenAIApi(configuracion);

    const HandleSubmit = (e) => {
        setCargando(true)

        openai.createImage({

            prompt: prompValue,
            n: 5,
            size: "1024x1024"
        }).then((res) => {
            if (res.status === 200) {
                setCargando(false);
                setResults(res.data)
            }
        }).catch((err) => {
            console.log(e, "Ocurrio un error")
        })
    }




    return (
        <React.Fragment>
            <NavBarForm />
            <MenuLateral />
            <section className='containerBlog'>
                <div className='formBlog'>
                    <div className="IconsAndTitle">

                    </div>
                    <Titulo value="IMAGES'S CREATOR DALL-E" />
                    <div className='row'>
                        <div className='col-md-6 mb-3'>
                            <textarea className='form-control txtArea' onChange={(e) => setPromtValue(e.target.value)}></textarea>
                        </div>

                        <div className="col-md-6 mb-3">
                            <h3 className="text-white">Select the image format </h3>
                            <div className="row mb-5 mt-3">
                                <div className="col-md-12 m-auto">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <h4 class="form-check-label text-white" for="flexRadioDefault1">
                                            1024x1024
                                        </h4>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <h4 class="form-check-label text-white" for="flexRadioDefault2">
                                            512x512
                                        </h4>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked />
                                        <h4 class="form-check-label text-white" for="flexRadioDefault3">
                                            256x256
                                        </h4>
                                    </div>
                                </div>



                            </div>


                            <div className='col-md-12'>
                                <div className="row botonesContainer">
                                    <div className="col-md-4 col-sm-4  col-xs-12">
                                        <button className="btnEnviar btnEnviarOutlineWhite" >Nuevo</button>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-xs-12">
                                        <button className="btnEnviar btnEnviarOutlineWhite">Modificar</button>
                                    </div>
                                    <div className="col-md-4 col-sm-4  col-xs-12">
                                        <button className='btnEnviar btnEnviarOutlineDark' onClick={HandleSubmit}>{cargando ? " Cargando, espere por favor" : "Enviar"}</button>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-12" id="response">
                                <hr></hr>
                                <h2 className="text-white">Respuesta:</h2>
                            </div>

                        </div>

                    </div>

                    <div className="container">
                        <h2>Deberia verse</h2>
                        <ImagesData imagesData={result.data}></ImagesData>
                    </div>
                </div>
            </section>


        </React.Fragment>
    )
}

export { FormDALLE }