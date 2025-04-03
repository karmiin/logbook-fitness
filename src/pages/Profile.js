// File: src/pages/Profile.js
import React, { useCallback, useEffect, useState } from "react";
import { Container, Typography, Box, Paper, Button, Tabs, Tab, Divider, CircularProgress } from "@mui/material";
import { Person, FitnessCenter, Restaurant, Logout } from "@mui/icons-material";
import ProfileInfo from "../components/ProfileInfo";
import GymLogbook from "../components/GymLogbook";
import NutritionDiary from "../components/NutritionDiary";
import UserRegistration from "../components/UserRegistration";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const [activeTab, setActiveTab] = useState(0);
    const [isRegistered, setIsRegistered] = useState(null);

    const fetchBackend = useCallback(async (token) => {
        try {
            const response = await fetch(
                "https://logbook-backend-aaevayfuechvb9g7.westeurope-01.azurewebsites.net/api/protected",
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Errore nella richiesta al backend: ${errorText}`);
            }
            const result = await response.text();
            console.log("Backend data:", result.message);
        } catch (error) {
            setError("errore " + error.message);
        }
    }, []);

    // Funzione per verificare se l'utente è registrato nel DB
    const checkUserRegistration = async (userId) => {
        try {
            const response = await fetch(`/api/user?userId=${userId}`);
            // Se la risposta è ok consideriamo l'utente registrato
            if (response.ok) {
                setIsRegistered(true);
            } else if(response.status === 404) {
                // 404 significa che non esiste ancora
                setIsRegistered(false);
            } else {
                // Altri errori impostiamo l'errore
                const msg = await response.text();
                throw new Error(msg);
            }
        } catch (err) {
            console.error(err);
            setIsRegistered(false);
        }
    };

    useEffect(() => {
        fetch("/.auth/me")
            .then((res) => res.json())
            .then((data) => {
                if (data.clientPrincipal) {
                    setUser(data.clientPrincipal);
                    fetchBackend(data.clientPrincipal.accessToken);
                    // Utilizziamo data.clientPrincipal.userId come identificativo
                    checkUserRegistration(data.clientPrincipal.userId);
                } else {
                    setError("utente non autenticato");
                }
            })
            .catch(() => setError("errore recupero utente"));
    }, [fetchBackend]);

    const handleTabChange = (event, newValue) => setActiveTab(newValue);

    if (error)
        return (
            <Container maxWidth="md" sx={{ mt: 4, textAlign: 'center' }}>
                <Paper elevation={3} sx={{ p: 4 }}>
                    <Typography variant="h5" color="error" gutterBottom>
                        Errore
                    </Typography>
                    <Typography variant="body1">{error}</Typography>
                    <Button variant="contained" sx={{ mt: 2 }} onClick={() => window.location.href = "/"}>
                        Torna alla Home
                    </Button>
                </Paper>
            </Container>
        );

    if (!user || isRegistered === null)
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
                <CircularProgress />
                <Typography variant="h6" sx={{ ml: 2 }}>
                    Caricamento...
                </Typography>
            </Box>
        );

    // Se la tab attiva é "Profilo" e l'utente non è registrato lo indirizziamo alla pagina di registrazione
    const renderProfileTab = () => {
        if (isRegistered) {
            return <ProfileInfo user={user} />;
        } else {
            return <UserRegistration user={user} onRegistrationSuccess={() => setIsRegistered(true)} />;
        }
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                    <Typography variant="h4" component="h1">
                        Profilo Personale
                    </Typography>
                    <Button variant="outlined" color="error" startIcon={<Logout />} onClick={() => window.location.href = "/.auth/logout"}>
                        Logout
                    </Button>
                </Box>
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    variant="fullWidth"
                    indicatorColor="primary"
                    textColor="primary"
                    sx={{ borderBottom: 1, borderColor: 'divider' }}
                >
                    <Tab icon={<Person />} label="Profilo" />
                    <Tab icon={<FitnessCenter />} label="Logbook Palestra" />
                    <Tab icon={<Restaurant />} label="Diario Nutrizionale" />
                </Tabs>
                <Divider sx={{ mb: 3 }} />
            </Paper>
            {activeTab === 0 && renderProfileTab()}
            {activeTab === 1 && <GymLogbook />}
            {activeTab === 2 && <NutritionDiary />}
        </Container>
    );
};

export default Profile;