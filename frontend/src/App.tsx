import { useState, useEffect } from 'react'
import './App.css'
import { getConsultas, criarConsulta } from './services/api'

function FormConsulta({ onConsultaCriada }: { onConsultaCriada: () => void }){
  const [paciente, setPaciente] = useState("");
  const [motivo, setMotivo] = useState("");
  const [medico, setMedico] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await criarConsulta({id_paciente: paciente, motivo_da_consulta: motivo, id_medico: medico});
    onConsultaCriada();

    alert("Consulta criada!");
  };

  return (
    <form onSubmit={handleSubmit} className='formulario'>
      <label htmlFor="motivo">Motivo da consulta: </label>
      <input 
        name='motivo'
        value={motivo}
        onChange={(e) => setMotivo(e.target.value)}>
      </input>

      <label htmlFor="paciente">Nome paciente: </label>
      <input
        name='paciente'
        value={paciente}
        onChange={(e) => setPaciente(e.target.value)}>
      </input>
      
      <label htmlFor="medico">Nome médico: </label>
      <input
        name='medico'
        value={medico}
        onChange={(e) => setMedico(e.target.value)}
      ></input>

      <button type='submit'>Salvar</button>
    </form>
  )

}

function App() {
  const [consultas, setConsultas] = useState<any[]>([])

  const refreshConsultas = () => {
    getConsultas().then(data => setConsultas(data));
  };

  useEffect(() => {
    refreshConsultas();
  }, []);

  return (
    <section className='consultaSection'>
      <h1>Consultas</h1>

      {consultas.map((consulta) =>(
        <div className='consultas' key={consulta.id}>
          <p>Motivo da consulta: {consulta.motivo_da_consulta}</p>
          <p>Paciente: {consulta.id_paciente}</p>
          <p>Medico: {consulta.id_medico}</p>
          <p>Data: {consulta.data_consulta}</p>
          
        </div>

        
      ))}

      <div>
        <FormConsulta onConsultaCriada={refreshConsultas}/>
      </div>
    </section>
  )
}



export default App
