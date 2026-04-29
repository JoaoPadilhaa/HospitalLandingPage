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
                <p>Nossa instituição hospitalar é dedicada a oferecer serviços de saúde de qualidade, atendimento 
                    humanizado e suporte médico especializado para toda a comunidade. Contamos com profissionais capacitados, 
                    estrutura moderna e um ambiente preparado para atender pacientes de diferentes necessidades, sempre priorizando o 
                    bem-estar, a segurança e a confiança de cada pessoa atendida. Nosso compromisso é proporcionar cuidados acessíveis e eficientes, 
                    contribuindo continuamente para a melhoria da saúde e da qualidade de vida da população.</p>
                    <MyButton
                        name="Mais sobre nós" className="btnabout"/>
            </div>
        </article>
    )
}

export default AboutUs;