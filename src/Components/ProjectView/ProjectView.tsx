import "./ProjectView.css"
import javascriptLogo from "../../images/Javascript.png"
import typescriptLogo from "../../images/Typescript.png"
import htmlLogo from "../../images/html.png"
import cssLogo from "../../images/css.png"
import reactLogo from "../../images/React.png"
import { FaExternalLinkAlt} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Url } from "url"
import { BsGithub } from "react-icons/bs"
type ProjectViewProps = {
    name: string
    image: string
    description: string
    techs: string[]
    linkExec: string
    invertido: string
    date: string
    linkGit: string
}

function ProjectView({name, image, description, techs, linkExec, invertido, date,linkGit}: ProjectViewProps){


    return(
        <div id="ProjectContainer" className="projectContainer">
            <div className="projectImage">
                <img src={image}/>
            </div>
            <div className="ProjectDescription">
                  <div className="name">
                <h5 className="nameFont">{name}</h5>
                <h5 className="date">{date}</h5>
            </div>
            
            <div className="TechnologiesUsed">
                {techs? techs.map((tech)=>{
                    tech.toLowerCase()
                    if(tech == "React"){
                     return(
                        <img src={reactLogo}></img>
                     )    
                    }
                    if(tech == "Typescript"){
                        return(
                           <img src={typescriptLogo}></img>
                        )    
                       }
                       if(tech == "Javascript"){
                        return(
                           <img src={javascriptLogo}></img>
                        )    
                       }
                       if(tech == "Css"){
                        return(
                           <img src={cssLogo}></img>
                        )    
                       }
                }): null}
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
            <div className="links">
                <a className="" href={linkExec} target="Blank">
                    <button>Visualizar execução</button>
                </a>
                <a className="" target="Blank" href={linkGit}>
                <BsGithub  className="icon" size={30}/>
                </a>
            </div>
            </div>
       

        </div>
    )
}
export default ProjectView