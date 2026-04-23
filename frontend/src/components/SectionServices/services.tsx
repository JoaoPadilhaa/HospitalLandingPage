import "./services.css";
import agenda from "../../assets/images/agenda.png";
import maocoracao from "../../assets/images/maocoracao.png";
import medico from "../../assets/images/medico.jpg";
import CardServices from "../../components/CardServices/card";

function Ourservices () {
    return (
        <section className="services">
            <div>
                <h1>Nossos Serviços</h1>
            </div>

            <div className="cards-container">
                <CardServices
                image={agenda}
                tittle="Data"
                description="Escolha uma data para agendar" />
                <CardServices 
                image= {maocoracao}
                tittle="Polo"
                description="Escolha o polo para ir"/>
                <CardServices 
                image={medico}
                tittle="Doutor"
                description="E escolha um doutor"/>
            </div>
            
        </section>
        
    )
}

export default Ourservices;