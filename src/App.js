// src/App.js
import React, { useState } from "react";
import WorkoutGenerator from "./WorkoutGenerator";

function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = async () => {
        try {
            const response = await fetch("https://logbook-backend-aaevayfuechvb9g7.westeurope-01.azurewebsites.net/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            if (!response.ok) {
                const errorData = await response.text();
                throw new Error(errorData);
            }
            const data = await response.json();
            setMessage("Registrazione riuscita: " + data.email);
        } catch (error) {
            setMessage("Errore nella registrazione: " + error.message);
        }
    };

    const handleLogin = async () => {
        try {
            const response = await fetch("https://logbook-backend-aaevayfuechvb9g7.westeurope-01.azurewebsites.net/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            if (!response.ok) {
                const errorData = await response.text();
                throw new Error(errorData);
            }
            const data = await response.json();
            setMessage("Login riuscito: " + data.email);
        } catch (error) {
            setMessage("Errore nel login: " + error.message);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Test di Autenticazione</h2>
            <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            /><br /><br />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            /><br /><br />
            <button onClick={handleRegister}>Registrati</button>
            <button onClick={handleLogin} style={{ marginLeft: "10px" }}>Login</button>
            <p>{message}</p>
            <WorkoutGenerator />
        </div>
    );
}

export default App;
