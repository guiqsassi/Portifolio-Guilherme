import "./ProjectView.css"
import javascriptLogo from "../../images/Javascript.png"
import typescriptLogo from "../../images/Typescript.png"
import htmlLogo from "../../images/html.png"
import cssLogo from "../../images/css.png"
import reactLogo from "../../images/React.png"
import { FaExternalLinkAlt} from "react-icons/fa";
import { Url } from "url"
type ProjectViewProps = {
    name: string
    image: string
    description: string
    techs: string[]
    link: string
}

function ProjectView({name, image, description, techs, link}: ProjectViewProps){
    return(
        <div className="projectContainer">
            <div className="projectImage">
                <img src={image}/>
            </div>
            <div className="ProjectDescription">
                  <div className="name">
                <h5>{name}</h5>
            </div>
            <div className="description">
                <p>{description}</p>
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
            <div className="links">
                <a className="">
                    <button>Visualizar execução</button>
                </a>
                <a className="">
                    <button>Repositório</button>
                </a>
            </div>
            </div>
       

        </div>
    )
}
export default ProjectView