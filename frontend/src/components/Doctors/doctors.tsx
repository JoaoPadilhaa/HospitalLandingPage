import "./doctors.css";
import {GetDoctors} from "../../services/doctors"
import { useState, useEffect } from "react";
import CardServices from "../../components/CardServices/card";

function Doctors() {
    const [doutores, setDoutores] = useState([]);

    useEffect(() =>{

        async function loadDoutores() {
            try {
                const data = await GetDoctors();
                setDoutores(data);
            } catch(error) {
                console.log(error);
            }
        }

        loadDoutores()
    }, [])

    return (
        <section className="doctors">
            <div className="doctortext">
                <h2>Nossos Doutores</h2>
                <h1>Visite nossos profissionais</h1>
            </div>
            
            <div className="doctor">
                {doutores.map((doutor: any) =>(
                    <div key={doutor.id}>
                        <CardServices
                            image={doutor.foto}
                            tittle={doutor.nome}
                            description={doutor.especialidade}
                            social={true}    
                            >
                            </CardServices>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Doctors;