import { useEffect, useState } from "react";
import { GetDoctors } from "../../services/doctors";
import "./doctorspage.css";

function Medics(){
    const [medicos, setMedicos] = useState ([]);

    useEffect(() =>{
        GetDoctors().then(data => setMedicos(data));
   }, [] )

    return(
        <section className="medics">
            {medicos.map((medico:any) =>(
                <div key={medico.id}>
                    <img src={medico.foto}/>
                    <p>Nome: {medico.nome}</p>
                    <p>Especialidade: {medico.especialidade}</p>
                    <p>CRM: {medico.crm}</p>
                    <p>Formação: {medico.formacao}</p>
                    <p>Descrição: {medico.descricao}</p>
                    <p>Horário de Atendimento: {medico.horario_atendimento}</p>
                    
                </div>
            ))}
        </section>
    )
}

export default Medics;