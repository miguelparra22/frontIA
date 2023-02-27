import React, { useState } from "react";
import { NavBar2 } from "../components/NavBar2";
import imageExample from "../Assets/wallpaper.jpg"
import { MenuLateral } from "../components/MenuLateral";
import "../Assets/Desings/navBarDesing.css"
import "../Assets/Desings/formMidJourney.css"
import { predict } from "replicate-api";
import { ImagesDataReplicate } from "../components/imagesDataReplicate"



function FormMidJourney() {
    const [result, setResults] = useState("");
    console.log(result)
    const [resultResponse, setResultResponse] = useState("");
    const [cargando, setCargando] = useState(false);
    const [textoEscrito, setTextoEscrito] = useState('');


    const REPLICATE_API_URL = 'https://api.replicate.com/v1/predictions';
    const REPLICATE_API_TOKEN = '02a243e6c25d44d3b11aa7c01f885ad579a26c88';
    const PROXY_SERVER_URL = 'https://cors-anywhere.herokuapp.com/';
    const promptUser =  textoEscrito;

    const requestOptions = {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${REPLICATE_API_TOKEN}`,
            'Access-Control-Allow-Origin': '*',
        },

        body: JSON.stringify({
            "version": "db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
            "input": { "prompt": promptUser }
        }),

    };

    const requestOptions2 = {

        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${REPLICATE_API_TOKEN}`,
            'Access-Control-Allow-Origin': '*',
        },

    };

    async function fetchData() {
        setCargando(true)
        const response = await fetch(PROXY_SERVER_URL + REPLICATE_API_URL, requestOptions);
        const data = await response.json();

        // Espera 5 segundos antes de continuar
        await new Promise(resolve => setTimeout(resolve, 5000));

        const response2 = await fetch(PROXY_SERVER_URL +  data.urls.get, requestOptions2);
        const data2 = await response2.json();

        return data2;
    }

    function api() {
        fetchData()
            .then(data => {
                console.log(data)
                setResults(data.output)
                if(data.output != null){
                    setCargando(false)
                    setResultResponse(data.output);
                }
                
            })
            .catch(error => console.error(error));
    }





    /*
    const REPLICATE_API_URL = 'https://api.replicate.com/v1/predictions';
    const REPLICATE_API_TOKEN = '02a243e6c25d44d3b11aa7c01f885ad579a26c88';
    const PROXY_SERVER_URL = 'https://cors-anywhere.herokuapp.com/';

  
  const api = () => {

      const REPLICATE_API_URL = 'https://api.replicate.com/v1/predictions';
      const REPLICATE_API_TOKEN = '02a243e6c25d44d3b11aa7c01f885ad579a26c88';
      const PROXY_SERVER_URL = 'https://cors-anywhere.herokuapp.com/';


      const requestOptions = {

          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${REPLICATE_API_TOKEN}`,
              'Access-Control-Allow-Origin': '*',
          },

          body: JSON.stringify({
              "version": "db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
              "input": { "prompt": "a vision of paradise. unreal engine" }
          }),



      };
 

      fetch(PROXY_SERVER_URL + REPLICATE_API_URL, requestOptions)
          .then(response => response.json())
          .then(result => {
              
              
              setResults(result.urls.get)
              console.log(result)
              
          })
          .catch(error => {
              console.error(error);
          })
      

  }

  
  /*const response = (url) =>{
      const requestOptions2 = {
      
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token 02a243e6c25d44d3b11aa7c01f885ad579a26c88`,
              'Access-Control-Allow-Origin': '*',
          }
  
      };
  
      fetch(PROXY_SERVER_URL + url , requestOptions2)
          .then(response => response.json())
          .then(result => {

              
              console.log(result)
              setResultResponse(result)
          }).catch(error => {
              console.error(error);
          })
  
  }*/


    /*  
      function makeSyncRequest(method, url, headers) {
          const xhr = new XMLHttpRequest();
          xhr.open(method, url, false); // Síncrono
          Object.keys(headers).forEach(key => xhr.setRequestHeader(key, headers[key]));
          return xhr.responseText;
        }
        
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Token 02a243e6c25d44d3b11aa7c01f885ad579a26c88`,
          'Access-Control-Allow-Origin': '*',
  
        };
  
        const responseData = makeSyncRequest('GET', result, headers);
        console.log(responseData);
  */







    return (
        <React.Fragment>
            <MenuLateral></MenuLateral>
            <section className="containerForm" id="main">
                <NavBar2></NavBar2>
                <div className="formMidJourney m-auto mt-5">
                    <h1>MidJourney</h1>
                    
                    <div className="row">
                        <div className="col-md-12">
                            <div className="spinnerContainer  mt-5 text-center" id="containerLoader">
                                <span className={cargando ? "loader" : "Send"}></span>

                            </div>
                        </div>
                        
                        {/** Form */} <div id="response"></div>
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
                            <textarea placeholder="Enter your idea." onChange={(e) => setTextoEscrito(e.target.value)}></textarea>
                        </div>
                        <div className="col-md-3 m-auto mt-3">
                            <div class="d-grid gap-2">
                                <button class="btn buttonEnviar" type="button" onClick={() => { api() }} >{cargando ? " Loading, please wait ..." : "Send"}</button>
                            </div>
                        </div>
                        {/** Response */}
                        <div className="container m-auto">
                            <h2>Your response is.</h2>
                            <ImagesDataReplicate imagesData={resultResponse}></ImagesDataReplicate>
                            

                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}


export { FormMidJourney }