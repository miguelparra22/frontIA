import React from "react";
import { Link } from "react-router-dom";
import { closeNav } from "../functions/menuFunctions"
import Swal from "sweetalert2";
import { FormMidJourney } from "../routes/FormMidJourney";

const pageNoExist = () =>{
  
  
  Swal.fire({
    title: 'Page under construction',
    icon: 'info',
    confirmButtonText: 'Ok'
  })
}



function MenuLateral() {

  return (
    <React.Fragment>
      <div id="sideNavId" className="sidenav">
        <a className="closebtn"  onClick={closeNav}>&times;</a>
        <Link to={"/"}><i className="fa fa-home"></i> Home</Link>

        <a data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Text  <i className="fa fa-caret-down m-3"></i></a>

        <div className="row">
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample1">
              <div className="card card-body bg-dark">
                <Link to={"/chatGpt3"}>Gpt3</Link>
                <Link to={"/"}  onClick={pageNoExist}>Bard</Link>              
              </div>
            </div>
          </div>
        </div>
       
        <a data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Image  <i className="fa fa-caret-down m-3"></i></a>

        <div className="row">
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample2">
              <div className="card card-body bg-dark">
                <Link to={"/Dalle"}>Dall-E</Link> 
                <Link to={"/MidJourney"}>Mid-Journey</Link>             
              </div>
            </div>
          </div>
        </div>

        <a href="#about" onClick={pageNoExist}>Video</a>
        <a href="#services"  onClick={pageNoExist}>Grammar</a>
        <a href="#clients"  onClick={pageNoExist}>NFT</a>
        <a href="#contact"  onClick={pageNoExist}>Blockchain Cert.</a>
        
        {/** <a href="#contact">More</a><a href="#contact">Logout</a>*/}
      </div>

    </React.Fragment>


  );


}

export { MenuLateral }