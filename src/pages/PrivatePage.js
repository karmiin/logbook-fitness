import React, {useEffect, useState} from "react";

const PrivatePage = () => {
    const [user, setUser] = useState(null);
    const [backendData, setBackendData] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("/.auth/me")
            .then((res) => res.json())
            .then((data) => {
                if(data.clientPrincipal){
                    setUser(data.clientPrincipal);
                    fetchBackend(data.clientPrincipal.accessToken);
                }else{
                    setError("utente non autenticato");
                }
            })
            .catch(() => setError("errore recupero utente"));
    }, []);

    const fetchBackend = async (token) => {
        try{
            const response = await fetch("https://logbook-backend-aaevayfuechvb9g7.westeurope-01.azurewebsites.net/api/protected", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            });
            console.log("risposta ricevuta", response);
            if(!response.ok){
                const errorText = await response.text();
                console.error("Errore nella richiesta al backend:", errorText);
                throw new Error(`Errore nella richiesta al backend: ${errorText}`);
            }
            const result = await response.text();
            console.log("json result", result);
            setBackendData(result.message);
        }catch (error){
            console.error("Errore catch:", error);
            setError("errore " + error.message);
        }
    };

    if(error) return <div>{error}</div>
    if(!user) return <div>Loading...</div>;

    return (
        <div>
            <h1>Benvenuto {user.userDetails}</h1>
            <p>{backendData}</p>
            <button onClick={() => window.location.href = "/.auth/logout"}>Logout</button>
        </div>
    );
};
export default PrivatePage;