import "./card.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

type CardServicesProps = {
    image : string;
    tittle : string;
    description: string;
    social?: boolean;
}

function CardServices({image, tittle, description, social}: CardServicesProps) {
    return (
        <div className="cards">
            <div className="card">
                <img src={image} alt={tittle} />
                <h3>{tittle}</h3>
                <p>{description}</p>
                {social && (
                    <div className="social">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CardServices;