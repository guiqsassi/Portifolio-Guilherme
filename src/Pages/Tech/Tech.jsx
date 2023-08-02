import "./Tech.css"
import TechIcons from "../../Components/TechIcons/TechIcons"
import javascriptLogo from "../../images/Javascript.png"
import typescriptLogo from "../../images/Typescript.png"
import htmlLogo from "../../images/html.png"
import cssLogo from "../../images/css.png"
import reactLogo from "../../images/React.png"
import mySqlLogo from "../../images/MySQL.png"
import gitLogo from "../../images/git.png"
import ArduinoLogo from "../../images/Arduino.png"
import CLogo from "../../images/C.png"
import JavaLogo from "../../images/Java.png"
import NodejsLogo from "../../images/Node.js.png"
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";


function Tech () {
    const control = useAnimation()
    const [ref, inView] = useInView()
    let visible = document.getElementById("techContainer")
    let [viewBoolean, setViewBoolean] = useState(false)

    useEffect(() => {
        if (inView) {
            console.log(inView)
            visible.classList.add("show")
            setViewBoolean(true)
        } 
        else{
            
            if(viewBoolean){
                console.log("a")
                visible.classList.remove("show")
            }
    
        }
        
      }, [control, inView]);
    return(
       <section id="tech">
        <div className="techContainer" ref={ref} id="techContainer">
            <div className="tittle">
                <h2>Habilidades</h2>
            </div>
            <div className="habilities" >
                <TechIcons urlImage={javascriptLogo} name="Javascript"/>
                <TechIcons urlImage={htmlLogo} name="HTML"/>
                <TechIcons urlImage={cssLogo} name="CSS"/>
                <TechIcons urlImage={reactLogo} name="React"/>
                <TechIcons urlImage={mySqlLogo} name="MySql"/>
                <TechIcons urlImage={gitLogo} name="Git"/>
                <TechIcons urlImage={ArduinoLogo} name="Arduino/Iot"/>
                <TechIcons urlImage={CLogo} name="C"/>
                <TechIcons urlImage={JavaLogo} name="Java (Learning)"/>
                <TechIcons urlImage={NodejsLogo} name="Node.js"/>

                <TechIcons urlImage={typescriptLogo} name="Typescript(Learning)"/>
                

            </div>
        </div>
            
       </section>
    )
}
export default Tech