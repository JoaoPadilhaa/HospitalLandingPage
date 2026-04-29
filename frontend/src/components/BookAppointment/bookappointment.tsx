import { useEffect, useState } from "react";
import "./bookappointment.css";
import { criarConsulta } from "../../services/api";
import { GetDoctors } from "../../services/doctors";

function MarcarConsulta() {
    const [paciente, setPaciente] = useState ("");
    const [medico, setMedico] = useState ("");
    const [motivo, setMotivo] = useState ("");
    const [medicos, setMedicos] = useState ([]);

    const [sucesso, setSucesso] = useState(false);

    useEffect(() => {
        async function fetchDoctors () {
            try {
                const data = await GetDoctors();
                setMedicos(data);
            } catch (error) {
                console.error(error)
            }
        }
    fetchDoctors();
    }, [])
    
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setSucesso(true);

        await criarConsulta({id_paciente: paciente, id_medico: medico, motivo_da_consulta: motivo})
    }

    return(
        <form onSubmit={handleSubmit} className="formularios">
            <h1>Marcar Consulta</h1>
            <label htmlFor="paciente">Nome do paciente: </label>
            <input
            name="paciente"
            value={paciente}
            onChange={(e) => setPaciente(e.target.value)}></input>

            <select
            value={medico}
            onChange={(e) => setMedico(e.target.value)}>
                <option value="">Selecione um médico </option>
                {medicos.map((medico:any) =>(
                    <option key={medico.id} value={medico.nome}>{medico.nome}</option>
                ))}
            </select>

            <label htmlFor="motivo">Motivo da consulta: </label>
            <input
            name="motivo"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}></input>

            <button type="submit">Criar consulta</button>
            {sucesso && <p className="aviso">Consulta criada com sucesso!</p>}
        </form>
    )
}

export default MarcarConsulta;