import { useState } from "react";
import "./Nav.css"
import { SlMenu } from "react-icons/sl";


const Nav = () => {
  const [flex, setFlex] = useState("")
  const [height, setHeight] = useState("7vh")


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
        <div className="navBar">
        <div className="logo">
              <h2> {"<Guilherme/>"} </h2>

        </div> 
        <div className="menu">
              <SlMenu id="burguer" className="hamburguer" onClick={()=>{MenuShow()}} size={35}></SlMenu>
        </div>
   
      </div>



     
    <div className="navigate" style={{transform: flex, transition: "0.5s"}}>
        <ul id="menuList" >
            <li><a href="#home" onClick={()=>{MenuShow()}}> Home </a></li>
            <li><a href="#tech" onClick={() =>{MenuShow()}}> Tecnologias </a></li>
            <li><a href="#projects" onClick={() =>{MenuShow()}}> Projetos </a></li>
            <li><a href="#contact" onClick={() =>{MenuShow()}}> Contato </a></li>
        </ul>
    </div>
    </header>
    </>
   

  )
}

export default Nav