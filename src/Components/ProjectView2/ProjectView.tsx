import "./ProjectView2.css"
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
    invertido: string
}

function ProjectView2({name, image, description, techs, link, invertido}: ProjectViewProps){
    
    return(
      
        <div className="ProjectViewContainer">
            <div className="ProjectName">
                <h3>{name}</h3>
            </div>
            <div className="ProjectImage">
                <img src={image} alt="" />
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
        </div>
            
        
       

    )
}
export default ProjectView2