import "./aboutus.css"
import medicaaboutus from "../../assets/images/medicaabouus.png"
import MyButton from "../Button/button"

function AboutUs() {
    return (
        <article className="aboutus">
            <div className="imgabout">
                <img src={medicaaboutus} alt="Medica Explicativa"/>
            </div>

            <div className="textaboutus">
                <h2>Sobre nós</h2>
                <h3>Nós ajudamos sua saúde</h3>
                <p>This profile describes the activities of health services and medical support as 
                    well as the facilities and conditions of the General Hospital which is reflected 
                    in the general public served from all groups, religions and beliefs, ethnicity and 
                    the level and frequency of bed occupancy which continues to increase significantly.</p>
                    <MyButton
                        name="Mais sobre nós" className="btnabout"/>
            </div>
        </article>
    )
}

export default AboutUs;