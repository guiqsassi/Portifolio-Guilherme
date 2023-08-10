import "./Home.css"
import dino from "../../images/iconMe.jpg";
import cv from "../../pdf/CV.pdf"
import { BsLinkedin, BsGithub} from "react-icons/bs";


function Home (){
    return(
      <>
       <section id="home">
        <div className="aboutMe">
        <div className="content">
        <span className="subtittle">
        Front-end Devloper 
        </span>
        <p className="tittle">
        Olá, eu sou 👋<br/> Guilherme Q. Sassi
        </p>
        <div className="buttons">
            <a download="Currículo Guilherme Queiroz Sassi" href={cv}>
              <button className="Curriculum">Download Cv</button>
            </a>
            <a>
              <button className="Contact">Contate-me</button>
            </a>
        </div>
        </div>
       
        </div>
        <div className="right">
          <div className="photo">
            <img src={dino}></img>
          </div>
      
          
        </div>
        
      </section>
      </>
       
    )
}
export default Home