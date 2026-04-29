const API_URL = "http://127.0.0.1:8000";

export async function enviarEmail (email:string)  {
    await fetch(`${API_URL}/api/cupom/`, {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            email,
        }),
    });
};