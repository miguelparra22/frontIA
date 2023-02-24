
import React from "react"
import {openNav, closeNav} from "../functions/menuFunctions";
import logo from "../Assets/logo.png"

function NavBarForm() {
    return (
        <nav className="navbar navbar-expand-lg bg-Mygreen">
        <div className="container-fluid">
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="container text-center">
            <a className="navbar-brand"><img src={logo} width="200px" height="50px"/></a>
            </div>
          
            <form className="d-flex" role="search">
             
              <button className="btn" type="button" onClick={openNav}>
              <span className="navbar-toggler-icon"></span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
}

export {NavBarForm};