// File: src/components/UserRegistration.js
import React, { useState } from "react";
import { Box, Typography, TextField, Button, Alert } from "@mui/material";

const UserRegistration = ({ user, onRegistrationSuccess }) => {
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const payload = {
            userId: user.userDetails,
            age: parseInt(age, 10),
            weight: parseFloat(weight),
            height: parseFloat(height)
        };

        try {
            const response = await fetch("/api/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            console.log("Payload sent to backend:", payload);
            if (!response.ok) {
                const message = await response.text();
                throw new Error(message);
            }
            onRegistrationSuccess();
        } catch (err) {
            setError("Registrazione fallita: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
                Completa la tua registrazione
            </Typography>
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Età"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Peso (kg)"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Altezza (cm)"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={loading}
                    sx={{ mt: 2 }}
                    fullWidth
                >
                    {loading ? "Registrazione in corso..." : "Registrati"}
                </Button>
            </form>
        </Box>
    );
};

export default UserRegistration;