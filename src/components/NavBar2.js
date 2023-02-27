import React from "react"
import { openNav } from "../functions/menuFunctions";
import logo from "../Assets/logoblanco.png"

function NavBar2() {
    return (
        <nav className="navbar navbar-expand-lg navBarShadow">
            <div className="container-fluid">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="container text-center">
                        <span className="navbar-brand"><img src={logo} alt="imagemenu" width="200px" height="50px" /></span>
                    </div>

                    <form className="d-flex" role="search">

                        <button className="btn buttonMenu" type="button" onClick={openNav}>
                            <i class="fa fa-bars" aria-hidden="true"></i>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}


export { NavBar2 }