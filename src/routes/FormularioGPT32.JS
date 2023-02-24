import React, { useState } from "react";
import { Accordeon } from "../components/Accordeon";
import { Titulo } from "../components/Titulo";
import { SelectItem } from "../components/SelectItem";
import { MenuLateral } from "../components/MenuLateral";
import { NavBarForm } from "../components/NavBar";
import { SelectTono } from "../components/SelectTono";
import { TextArea } from "../components/TextArea";
import { Configuration, OpenAIApi } from "openai";
import { SelectType } from "../components/SelectType";

const tituloGPT3 = "Need help?"
const textoAccordeonGPT3 = <p>Very low temperature (0.1 - 0.3): The model tends to generate more precise and conservative responses, and is less likely to make mistakes or produce absurd answers. However, it is also less likely that the model will generate imaginative or innovative responses.

    Low temperature (0.3 - 0.7): The model has a balance between accuracy and creativity, generating responses that are mostly coherent and relevant, but with some interesting variations.

    High temperature (0.7 - 1): The model tends to generate more creative and risky responses, with more unexpected and imaginative responses. However, it is also more likely that the model will make mistakes or produce absurd or incoherent responses.</p>



function FormularioGPT32() {

    const [style, setStyle] = useState("");
    const [mood, setMood] = useState("");
    const [topic, setTopic] = useState("");
    const [type, setType] = useState("");
    //const [range, setRange] = useState("");
    const [textEscrito, setTextoEscrito] = useState("");

    const prompt = `Write contend type ${type} type contend , with ${mood} tone about ${topic}, considering the following:${style} and add a title or subject if required.\n##`
    //const prompt = `Write a blog post and its title, with a ${mood} tone, on the topic of ${topic}. Consider the following themes: ${style}.\n##`

   
    const [cargando, setCargando] = useState(false);
    const configuracion = new Configuration({
        apiKey: "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",
    })

    const containerRespuesta = document.getElementById("response")
 

    const openai = new OpenAIApi(configuracion);

    const HandleSubmit = (e) => {
        setCargando(true)
        openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0,
            max_tokens: 7,
        }).then((res) => {
            if (res.status === 200) {
                setCargando(false);
                setTextoEscrito(res?.data?.choices[0]?.text)
                showData(res?.data?.choices[0]?.text)
                containerRespuesta.style.display = "block"
            }
        }).catch((err) => {
            console.log(e, "Ocurrio un error")
        })
    }
    
    function showData(data){
       const containerData = document.getElementById("txtAreaResponse")
       containerData.value = data
    }
 

    return (
        <React.Fragment>

            <section id="main">
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
                                        <SelectItem onChange={(e) => setTopic(e.target.value)}></SelectItem>
                                    </div>
                                    <div className="col-md-12">
                                        <SelectTono onChange={(e) => setMood(e.target.value)}></SelectTono>
                                    </div>
                                    <div>
                                        <SelectType onChange={(e) => setType(e.target.value)}></SelectType>
                                    </div>
                                    <div className="col-md-12">
                                        <label className="text-white">Control the "Temperature"</label>
                                        <input type="range" className='inputRange' min="0.0" max="1.0" step=".1"></input>
                                        <p className="text-white" id="rangeP"></p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6 mb-3'>
                                <TextArea onChange={(e) => setStyle(e.target.value)}></TextArea>
                            </div>

                            <div className='col-md-12 mt-3'>
                                <hr />
                                <div className="row botonesContainer">
                                    <div className="col-md-4 col-sm-4  col-xs-12">
                                        <button className="btnEnviar btnEnviarOutlineWhite" id="reload">New</button>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-xs-12">
                                        <button className="btnEnviar btnEnviarOutlineWhite">Modify</button>
                                    </div>
                                    <div className="col-md-4 col-sm-4  col-xs-12">
                                        <button className='btnEnviar btnEnviarOutlineDark' onClick={HandleSubmit}>{cargando ? " Cargando, espere por favor" : "Send"}</button>
                                    </div>

                                </div>
                            </div>

                            

                            <div className="col-md-12" id="response">
                                <hr></hr>
                                <h2 className="text-white">Respuesta:</h2>
                                <textarea className='txtAreaResponse' value={textEscrito} onChange={(e) => setTextoEscrito(e.target.value)}></textarea>
                            </div>

                            <div className="col-md-12">
                                <hr></hr>
                                <Accordeon titulo={tituloGPT3}  textoAccordeon={textoAccordeonGPT3} />
                            </div>

                        </div>

                    </div>

                </section>
            </section>





        </React.Fragment>
    )
}

export { FormularioGPT32 }