const API_URL = "http://127.0.0.1:8000";

export async function getConsultas(){
    const response = await fetch(`${API_URL}/api/consulta/`);

    return response.json();
}

export async function criarConsulta(data:any) {
    
    const response = await fetch (`${API_URL}/api/consulta/`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(data),
    });
    console.log( "dados enviados",data)
    console.log("Resposta da API", response.status);
    const result = await response.json();
    console.log("Resposta da API (JSON)", result);
    return  result;
}