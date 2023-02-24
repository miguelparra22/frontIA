function openNav() {
    document.getElementById("sideNavId").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("sideNavId").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

const openDrop = () =>{
   
    alert("hola")
}


export {openNav, closeNav, openDrop}