import "./Projects.css"
import Lorax from "../../images/Lorax.png"
import Poke from "../../images/PokeDbPrint.png"
import Calculator from "../../images/Calculator.png"

// import Lorax from "../../images/Lorax.png"
import ProjectView from "../../Components/ProjectView/ProjectView";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

function Projects(){
    const control = useAnimation()
    const [ref, inView] = useInView()
    let visible = document.getElementById("containerProjects")
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
        <section id="projects" ref={ref}>
            <div className="containerProjects" id="containerProjects">
                 <div className="tittle">
                <h2>Projetos</h2>
            </div>
            <div className="projetos">
            <ProjectView name="Lorax" linkExec="https://lorax-landing-page.vercel.app/" linkGit="https://github.com/guiqsassi/Lorax_landing_page" techs={["React","Css", "Javascript"]} date="26/05/2023" description="Este projeto é uma Landing page dedicada ao filme Lorax O Ladrão de florestas" image={Lorax}></ProjectView>
            <ProjectView name="PokeDb" date="28/06/2023" linkGit="https://github.com/guiqsassi/Pokedex" linkExec={"https://pokedb-six.vercel.app/"} image={Poke} techs={["React","Css", "Javascript"]} description="Projeto realizado utilizando a api de pokedex"></ProjectView>
            <ProjectView name="Calculadora React" date="23/05/2023" linkGit="https://github.com/guiqsassi/Calculator" linkExec={"https://calculator-swart-nine.vercel.app/"} image={Calculator} techs={["React","Css", "Javascript"]} description="Este projeto é uma Calculador feita em React"></ProjectView>
            </div> 
        </div>
             
        </section>
    )
}
export default Projects;