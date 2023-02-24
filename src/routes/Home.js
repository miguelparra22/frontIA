import React from "react";
import { MenuLateral } from "../components/MenuLateral";
import { NavBarForm } from "../components/NavBar";


function Home(){
    return(
        <React.Fragment>
            <NavBarForm />
            <MenuLateral />
            
        </React.Fragment>
  
    );
}


export {Home}