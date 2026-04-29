import { useEffect, useState } from "react";
import "./queries.css";
import { getConsultas } from "../../services/api";


function ConsultasMarcadas() {
    const[consultas, setConsulta] =  useState<any[]>([]);

    useEffect(() =>{
        getConsultas().then(data=>setConsulta(data));
    }, [])


    return(
        <section className="queries">
            <h1>Consultas</h1>
            {consultas.map((consulta) => (
            <div className="queriesDiv" key={consulta.id}>
                <p>Paciente: {consulta.id_paciente}</p>
                <p>Médico: {consulta.id_medico}</p>
                <p>Motivo da consulta: {consulta.motivo_da_consulta}</p>
                <p>Data: {consulta.data_consulta}</p>
            </div> 
            ))}
        </section>
    )
}

export default ConsultasMarcadas;