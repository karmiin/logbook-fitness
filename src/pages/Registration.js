import React, { useState } from "react";
import { Container, Box, Card, CardContent, Typography, TextField, Button } from "@mui/material";

const Registration = () => {
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

    return (
        <Container maxWidth="xs">
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Card sx={{ width: "100%", p: 2, boxShadow: 3 }}>
                    <CardContent>
                        <Typography variant="h5" align="center" gutterBottom>
                            Registrazione
                        </Typography>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            margin="normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            variant="outlined"
                            margin="normal"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleRegister}>
                            Registrati
                        </Button>
                        {message && (
                            <Typography variant="body2" color="error" align="center" sx={{ mt: 2 }}>
                                {message}
                            </Typography>
                        )}
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
};

export default Registration;