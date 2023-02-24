import React from "react";
import { Link } from "react-router-dom";
import { closeNav } from "../functions/menuFunctions"

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("activeBtn");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

function MenuLateral() {

  return (
    <React.Fragment>
      <div id="sideNavId" className="sidenav">
        <a className="closebtn"  onClick={closeNav}>&times;</a>
        <Link to={"Home"}>Home <i className="fa fa-home"></i></Link>

        <a data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Text  <i className="fa fa-caret-down m-3"></i></a>

        <div className="row">
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample1">
              <div className="card card-body bg-dark">
                <Link to={"/chatGpt3"}>Gpt3</Link>
                <Link to={"/Dalle"}>Dall-E</Link>              
              </div>
            </div>
          </div>
        </div>
       
        <a href="#about">Video</a>
        <a href="#services">Grammar</a>
        <a href="#clients">NFT</a>
        <a href="#contact">Blockchain Cert.</a>
        <a href="#contact">More</a>
        <a href="#contact">Logout</a>
      </div>

    </React.Fragment>


  );


}

export { MenuLateral }