import "./testimonials.css";
import  Rating  from "../Rating/rating"
import Depoimento1 from "../../assets/images/depoimento1.png"
import Depoimento2 from "../../assets/images/depoimento2.png"

function Testimonials() {
    return (
        <article className="depoimentos">
            <div className="textosDepo">
                <h3>Depoimentos</h3>
                <h1>O que eles dizem depois de visitar nosso hospital:</h1>
            </div>

            <section className="cardDepoimento">
                <div className="card1">
                    <img src={Depoimento1}/>
                    <h3>John Doe</h3>
                    <p>Fui muito bem atendido desde a recepção até a consulta. A equipe foi atenciosa, prestativa e me 
                        passou muita confiança durante todo o atendimento.   </p>
                    <Rating rating={3}/>
                </div>

                <div className="card2">
                    <img src={Depoimento2}/>
                    <h3>Syl Vester</h3>
                    <p>O atendimento foi excelente desde o primeiro momento. Os profissionais foram educados, cuidadosos e 
                        explicaram tudo com muita clareza também.</p>
                    <Rating rating={3}/>
                </div>
            </section>
        </article>
        
        
    )
}

export default Testimonials;