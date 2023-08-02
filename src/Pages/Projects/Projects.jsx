import "./Projects.css"
import Poke from "../../images/PokeAll.png"
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
            <ProjectView name="Real Fast Heath" link={"https://pokedb-six.vercel.app/"} image={Poke} techs={["React","Css", "Javascript"]} description="Projeto realizado utilizando a api de pokedex"></ProjectView>
            </div>
        </div>
             
        </section>
    )
}
export default Projects;