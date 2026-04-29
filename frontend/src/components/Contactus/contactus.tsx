import "./contactus.css";
import Buttonn from "../Button/button";

function ContactUs(){
    return (
        <section className="ContactUssss">
            <div className="textsContact">
                <h1>Vamos Consultar o Nosso Médico Sobre Sua Saúde</h1>
                <h3>Iremos providenciar o melhor serviço.</h3>
            </div>

            <div>
                <Buttonn
                    name="Entre em Contato"
                    className="btnContactUs"/>
            </div>
        </section>
    )
}

export default ContactUs;