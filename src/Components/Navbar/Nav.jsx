import { useState } from "react";
import "./Nav.css"
import { SlMenu } from "react-icons/sl";


const Nav = () => {
  const [flex, setFlex] = useState("")
  const [height, setHeight] = useState("7vh")

  function menuNavigation(){
    const elemento = document.getElementById('burguer');
    const display = getComputedStyle(elemento).getPropertyValue('display');
    console.log(display);

    if(display == "flex"){
     setHeight("7%"); setFlex("none")
    }
   
  }

  function MenuShow(){
    if(flex == "translateX(0)"){
      setFlex("translateX(200%)")
    }
    else{
      setFlex("translateX(0)")

    }
  }
  return(
    <>
     <header style={{height:"7vh"}}>
        <div className="logo">
       
       <h2> {"<Guilherme/>"} </h2>
       <SlMenu id="burguer" className="hamburguer" onClick={()=>{MenuShow()}} size={35}></SlMenu>
   </div>



     
    <div className="navigate" style={{transform: flex, transition: "0.5s"}}>
        <ul id="menuList" >
            <li><a href="#home" onClick={()=>{menuNavigation()}}> Home </a></li>
            <li><a href="#tech" onClick={() =>{menuNavigation()}}> Tecnologias </a></li>
            <li><a href="#projects" onClick={() =>{menuNavigation()}}> Projetos </a></li>
            <li><a href="#contact" onClick={() =>{menuNavigation()}}> Contato </a></li>
        </ul>
    </div>
    </header>
    </>
   

  )
}

export default Nav