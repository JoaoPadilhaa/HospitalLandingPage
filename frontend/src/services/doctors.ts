const API_URL = "http://127.0.0.1:8000";

export async function GetDoctors() {
    const response = await fetch(`${API_URL}/api/medico/`)

    if (!response.ok) {
        throw new Error("Erro ao buscar doutores");
    }

    return response.json();
}