import "./footer.css";
import Butonn from "../Button/button";
import { FaInstagram, FaTwitter, FaWhatsapp, FaYoutube, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { enviarEmail } from "../../services/email";

function Foterr() {
    const[email, setEmail] = useState<string>("");
    const [sucesso, setSucesso] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e: any) => {
       try{
            await enviarEmail(email);
            setSucesso(true);
       } catch (error) {
        console.log("Erro ao enviar email:", error);
       }
        
    }
    return (
        <section className="footer">
            <div className="textfooter">
                <h3 className="logozin">Hos<span className="blue">pital</span></h3>
                <p>Nosso hospital busca atender às necessidades da comunidade oferecendo serviços médicos de qualidade, com atendimento 
                    humanizado e acessível para todos os pacientes.</p>
                <div className="sociaisFooter">
                    <a href="#"><FaInstagram/></a>
                    <a href="#"><FaLinkedin/></a>
                    <a href="#"><FaTwitter/></a>
                    <a href="#"><FaWhatsapp/></a>
                    <a href="#"><FaYoutube/></a>
                </div>
            </div>

            <div className="lista">
                <ul>
                    <li><a href="#">Médicos</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Serviços</a></li>
                </ul>
            </div>

            <div className="subscribe">
                <p>Obtenha um cupom para exame médico</p>
                <input type="Email" placeholder="Digite seu email" value={email} onChange={handleChange}/>
                <Butonn
                    name="Inscreva-se"
                    className="btnFooter"
                    onClick={handleSubmit}/>
                {sucesso && <p className="aviso">Cupom enviado com sucesso!</p>}
            </div>
        </section>
    )
}

export default Foterr;