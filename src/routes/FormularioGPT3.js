import React, { useState } from "react";
import { Accordeon } from "../components/Accordeon";
import { Titulo } from "../components/Titulo";
import { SelectItem } from "../components/SelectItem";
import { MenuLateral } from "../components/MenuLateral";
import { NavBarForm } from "../components/NavBar";
import { SelectTono } from "../components/SelectTono";
import { Configuration, OpenAIApi } from "openai";
import { SelectType } from "../components/SelectType";


const tituloGPT3 = "Need help?"
const textoAccordeonGPT3 = <p>Very low temperature (0.1 - 0.3): The model tends to generate more precise and conservative responses, and is less likely to make mistakes or produce absurd answers. However, it is also less likely that the model will generate imaginative or innovative responses.

    Low temperature (0.3 - 0.7): The model has a balance between accuracy and creativity, generating responses that are mostly coherent and relevant, but with some interesting variations.

    High temperature (0.7 - 1): The model tends to generate more creative and risky responses, with more unexpected and imaginative responses. However, it is also more likely that the model will make mistakes or produce absurd or incoherent responses.</p>


function FormularioGPT3() {


    const [style, setStyle] = useState("");
    const [mood, setMood] = useState("");
    const [topic, setTopic] = useState("");
    const [type, setType] = useState("");
    const [rangeValue, setRangeValue] = useState("");
    const [textEscrito, setTextoEscrito] = useState("");
    

    const prompt = `Write contend type ${type} type contend , with ${mood} tone about ${topic}, considering the following:${style} and add a title or subject if required.\n##`
    //const prompt = `Write a blog post and its title, with a ${mood} tone, on the topic of ${topic}. Consider the following themes: ${style}.\n##`


    const [cargando, setCargando] = useState(false);
    const configuracion = new Configuration({
        apiKey: "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"
    })

    const containerRespuesta = document.getElementById("response")

    const showForm = () => {
        const containerForm = document.querySelectorAll(".formGpt3")
        containerForm.forEach(function(element){
            element.style.display = "block"
        })
        containerRespuesta.style.display = "none";
    }
    const byeForm = () => {
        const containerForm = document.querySelectorAll(".formGpt3")
        containerForm.forEach(function(element){
            element.style.display = "none"
        })
        
    }


    const openai = new OpenAIApi(configuracion);

    const HandleSubmit = (e) => {
        setCargando(true)
        openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: parseInt(rangeValue),
            max_tokens: 100,
        }).then((res) => {
            if (res.status === 200) {
                
                setCargando(false);
                byeForm()
                setTextoEscrito(res?.data?.choices[0]?.text)
                
                containerRespuesta.style.display = "block"

            }
        }).catch((err) => {

            console.log(e, "Ocurrio un error")
        })
    }



    return (
        <React.Fragment>

            <section id="main">
                <MenuLateral></MenuLateral>
                <NavBarForm></NavBarForm>


                <section className='containerBlog'>
                    <div className='formBlog'>
                        <Titulo value="TEXT GENERATOR GPT3" />
                        <div className='row'>
                            <div className='col-md-6 formGpt3'>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label className="pInfo">Type</label>
                                        <select id="newTopic" className='selectForm' onChange={(e) => setType(e.target.value)}>
                                            <SelectType></SelectType>
                                        </select>
                                        <p className="text-white"><b>Your selection: </b>{type}</p>
                                    </div>
                                    <div className="col-md-12">
                                        <label className="pInfo">Tone</label>
                                        <select className='selectForm' onChange={(e) => setMood(this.target.value)}>
                                            <SelectTono></SelectTono>
                                        </select>
                                        <p className="text-white"><b>Your selection: </b>{mood}</p>
                                    </div>
                                    <div className="col-md-12 mb-2">
                                        <label className="pInfo">Topic of your interest</label>
                                        <select className='selectForm' onChange={(e) => setTopic(e.target.value)}>
                                            <SelectItem ></SelectItem>
                                        </select>
                                        <p className="text-white"><b>Your selection: </b> {topic}</p>
                                    </div>

                                    <div className="col-md-12">
                                        <label className="text-white">Control the "Temperature"</label>
                                        <input type="range" className='form-range inputRange'  min="0.0"  max="1.0" step=".1" onChange={(e) => setRangeValue(e.target.value)} ></input>
                                        <p className="text-white" id="rangeP">Your range selected: {rangeValue}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6 mb-3 formGpt3'>
                                <span className="labelTitulo">Write about:</span>
                                <textarea onChange={(e) => setStyle(e.target.value)} id="textAreaBlog" className='form-control txtArea' placeholder='Separate your ideas, with a " , "'></textarea>
                            </div>

                            <div className='col-md-12 mt-3 formGpt3'>
                                <hr />
                                <div className="row botonesContainer">

                                    <div className="col-md-4 col-sm-4  col-xs-12">
                                        <button className='btnEnviar btnEnviarOutlineDark' onClick={HandleSubmit}>{cargando ? " Loading, please wait ..." : "Send"}</button>
                                    </div>

                                </div>
                            </div>


                            <div className="col-md-12">
                                <div className="spinnerContainer  mt-5 text-center" id="containerLoader">
                                    <span className={cargando ? "loader" : "Send"}></span>
                                </div>
                            </div>

                            <div className="col-md-12" id="response">
                                <div className="row">

                                    <div className="col-md-12">
                                        <hr></hr>


                                        <h2 className="text-white">Answer: </h2>
                                        <textarea className='txtAreaResponse  txtArea' value={textEscrito} onChange={(e) => setTextoEscrito(e.target.value)}>

                                        </textarea>
                                        <div className="col-md-6 col-sm-6  col-xs-12 mt-3">
                                            <button className="btnEnviar btnEnviarOutlineWhite" id="reload" onClick={showForm}>Generate new text <span className="fa fa-plus"></span></button>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="col-md-12">
                                <hr></hr>
                                <Accordeon titulo={tituloGPT3} textoAccordeon={textoAccordeonGPT3} />
                            </div>

                        </div>

                    </div>

                </section>
            </section>





        </React.Fragment>
    )
}

export { FormularioGPT3 }