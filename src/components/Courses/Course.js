import React, {useState} from "react"; 
import "./Courses.css"
import courseImage from "../../assets/images/course1.jpg"

const Course = ({city, country, date}) =>{

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
      setIsHovered(true);
    };
  
    const handleMouseOut = () => {
      setIsHovered(false);
    };

    return(
    <>
        <div className="course" 
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut} >
          <img src={courseImage} className = {`${isHovered ? "over" : ""}`} alt="course1" />
          <div className={`overlay-${isHovered ? "middle" : "bottom"}`}>
            <p>{city}, {country}</p>
            {isHovered && <p>{date}</p>}
          </div>
        </div>
    </>
    )
}

export default Course