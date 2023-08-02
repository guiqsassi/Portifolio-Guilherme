import "./TechIcons.css"

type TechIconsProps = {
    urlImage: string;
    name: string;
}

function TechIcons({urlImage, name}: TechIconsProps){
    return(
        <div className="TechContainer">
        <span className="arrow" />
        <span className="TechName">{name}</span>
        <div className="IconContainer">
        <img src={urlImage}/>
        </div>
        </div>
      
        
    
    
    )
} 
export default TechIcons