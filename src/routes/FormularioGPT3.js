import React, { useEffect, useState } from "react";
import { Accordeon } from "../Accordeon";
import { Titulo } from "../components/Titulo";
import { SelectItem } from "../components/SelectItem";
import { MenuLateral } from "../components/MenuLateral";
import { NavBarForm } from "../components/NavBar";
import { SelectTono } from "../components/SelectTono";
import { TextArea } from "../components/TextArea";
import { ResponseText } from "../components/ResponseText";
import { Configuration, OpenAIApi } from "openai";
import { SelectType } from "../components/SelectType";

const tituloGPT3 = "¿Necesitas ayuda?"
const textoAccordeonGPT3 = <p>Temperatura muy baja (0.1 - 0.3): El modelo tiende a generar respuestas más precisas y conservadoras, y es menos probable que cometa errores o produzca respuestas absurdas. Sin embargo, también es menos probable que el modelo genere respuestas imaginativas o innovadoras. Temperatura baja (0.3 - 0.7): El modelo tiene un equilibrio entre la precisión y la creatividad, generando respuestas que son en su mayoría coherentes y relevantes, pero con algunas variaciones interesantes. Temperatura alta (0.7 - 1): El modelo tiende a generar respuestas más creativas y arriesgadas, con respuestas más inesperadas e imaginativas. Sin embargo, también es más probable que el modelo cometa
    errores o produzca respuestas absurdas o incoherentes.</p>

const textoAccordeonTipo = () => {
    return textoAccordeonGPT3
}


var elInput = document.querySelector('#input');
if (elInput) {
    var etiqueta = document.querySelector('#etiqueta');
    if (etiqueta) {
        etiqueta.innerHTML = elInput.value;

        elInput.addEventListener('input', function () {
            etiqueta.innerHTML = elInput.value;
        }, false);
    }
}


const imp = () => {
    let valorItem = document.getElementById("textAreaBlog").value;
    alert(valorItem)
}






function FormularioGPT3() {
   
    //const style = "javascript";
    
    const [style, setStyle] = useState("");
    const [mood, setMood] = useState("");
    const [topic, setTopic] = useState("");
   // const [type, setType] = useState("");
    const [range, setRange] = useState("");

    //const prompt = `Write contend type ${type} type contend , with ${mood} tone about ${topic}, considering the following:${style} and add a title or subject if required.\n##`
    const prompt = `Write a blog post and its title, with a ${mood} tone, on the topic of ${topic}. Consider the following themes: ${style}.\n##`
    
    const [textEscrito, setTextoEscrito] = useState("");
    const [cargando, setCargando] = useState(false);
    const configuracion = new Configuration({
        apiKey: "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",
    })

    const containerRespuesta =  document.getElementById("response")

    const openai = new OpenAIApi(configuracion);

    const HandleSubmit = (e) => {
        setCargando(true)

        openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0,
            max_tokens: 200,
        }).then((res) => {
            if (res.status === 200) {
                setCargando(false);
                setTextoEscrito(res?.data?.choices[0]?.text)
                containerRespuesta.style.display = "block"
            }
        }).catch((err) => {
            console.log(e, "Ocurrio un error")
        })
    }


  


    return (
        <React.Fragment>

            <MenuLateral></MenuLateral>
            <NavBarForm></NavBarForm>

            <section className='containerBlog'>
                <div className='formBlog'>
                    <div className="IconsAndTitle">

                    </div>
                    <Titulo value="BLOG'S REDACTOR" />
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className="row">
                                <div className="col-md-12">
                                    <SelectItem key="1" onChange={(e) => setTopic(e.target.value)}></SelectItem>
                                </div>
                                <div className="col-md-12">
                                    <SelectTono  key="1"onChange={(e) => setMood(e.target.value)}></SelectTono>
                                </div>
                                {/**<div>
                                    <SelectType onChange={(e) => setType(e.target.value)}></SelectType>
                                </div> */}
                                <div className="col-md-12">
                                    <label className="text-white">Controla la "Temperatura"</label>
                                    <div id="etiqueta"></div>
                                    <input type="range" className='inputRange' min="0.0" max="1.0" step=".1"></input>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6 mb-3'>
                            <TextArea onChange={(e)=> setStyle(e.target.value)}></TextArea>
                        </div>

                        <div className='col-md-12 mt-3'>
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
                        <textarea value={textEscrito} className='txtAreaResponse' onChange={(e) => setTextoEscrito(e.target.value)}></textarea>
                        </div>

                    </div>

                </div>

            </section>



        </React.Fragment>
    )
}

export { FormularioGPT3 }