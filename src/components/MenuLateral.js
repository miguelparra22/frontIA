import React from "react";
import {Link} from "react-router-dom";
import {openNav, closeNav, openDrop} from "../functions/menuFunctions"

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
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
                <a className="closebtn" onClick={closeNav}>&times;</a>
                <Link to={"Home"}>Home</Link>
                <button className="dropdown-btn">Text
                    <i className="fa fa-caret-down m-3"></i>
                </button>
                <div className="dropdown-container">
                    <Link to={"/chatGpt3"}>ChatGpt3</Link>
                    <Link to={"/Dalle"}>Dalle</Link>
                </div>
                <a href="#about">Video</a>
                <a href="#services">Gramática</a>
                <a href="#clients">NFT</a>
                <a href="#contact">Blockchain Cert.</a>
                <a href="#contact">More</a>
                <a href="#contact">Logout</a>
            </div>

        </React.Fragment>


    );


}

export { MenuLateral }