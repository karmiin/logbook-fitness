import React, { useEffect, useState } from "react";
import {
    Container, Typography, Box, Paper, Button, Avatar,
    Tabs, Tab, Divider, Card, CardContent, Grid, CircularProgress
} from "@mui/material";
import {
    FitnessCenter, Restaurant, Person, Logout, Edit
} from "@mui/icons-material";

// Componente Profilo Utente
const ProfileInfo = ({ user }) => {
    // Dati utente simulati (in un caso reale verrebbero dal backend)
    const userDetails = {
        name: user.userDetails,
        weight: 75,
        height: 180,
        age: 30
    };

    return (
        <Box sx={{ mt: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card elevation={3}>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Avatar
                                sx={{ width: 120, height: 120, mx: 'auto', mb: 2, bgcolor: 'primary.main' }}
                            >
                                {userDetails.name.charAt(0).toUpperCase()}
                            </Avatar>
                            <Typography variant="h5" gutterBottom>
                                {userDetails.name}
                            </Typography>
                            <Button
                                startIcon={<Edit />}
                                variant="outlined"
                                size="small"
                                sx={{ mt: 1 }}
                            >
                                Modifica profilo
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Informazioni Personali
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography variant="body2" color="text.secondary">
                                            Peso
                                        </Typography>
                                        <Typography variant="h6">
                                            {userDetails.weight} kg
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography variant="body2" color="text.secondary">
                                            Altezza
                                        </Typography>
                                        <Typography variant="h6">
                                            {userDetails.height} cm
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography variant="body2" color="text.secondary">
                                            Età
                                        </Typography>
                                        <Typography variant="h6">
                                            {userDetails.age} anni
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

// Componente Logbook Palestra
const GymLogbook = () => {
    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
                Logbook Allenamento
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Card sx={{ mb: 3 }}>
                <CardContent>
                    <Typography variant="h6">
                        Sessione: Petto e Tricipiti
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        10 Giugno 2023
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="body1" gutterBottom>
                            • Panca piana: 4 serie x 8 reps - 80kg
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            • Panca inclinata: 3 serie x 10 reps - 65kg
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            • Push-down: 3 serie x 12 reps - 30kg
                        </Typography>
                    </Box>
                </CardContent>
            </Card>

            <Card>
                <CardContent>
                    <Typography variant="h6">
                        Sessione: Gambe
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        8 Giugno 2023
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="body1" gutterBottom>
                            • Squat: 4 serie x 8 reps - 100kg
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            • Leg press: 3 serie x 10 reps - 140kg
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            • Leg extension: 3 serie x 12 reps - 60kg
                        </Typography>
                    </Box>
                </CardContent>
            </Card>

            <Button
                variant="contained"
                startIcon={<FitnessCenter />}
                sx={{ mt: 3 }}
            >
                Aggiungi allenamento
            </Button>
        </Box>
    );
};

// Componente Diario Nutrizione
const NutritionDiary = () => {
    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
                Diario Nutrizionale
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">
                                Lunedì
                            </Typography>
                            <Divider sx={{ my: 1 }} />
                            <Typography variant="subtitle1">Colazione</Typography>
                            <Typography variant="body2" gutterBottom>
                                Avena con latte e frutti di bosco, caffè
                            </Typography>

                            <Typography variant="subtitle1">Pranzo</Typography>
                            <Typography variant="body2" gutterBottom>
                                Petto di pollo, riso integrale, insalata mista
                            </Typography>

                            <Typography variant="subtitle1">Cena</Typography>
                            <Typography variant="body2" gutterBottom>
                                Salmone, patate dolci, verdure grigliate
                            </Typography>

                            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="body2">
                                    <strong>Calorie:</strong> 2100 kcal
                                </Typography>
                                <Typography variant="body2">
                                    <strong>Proteine:</strong> 140g
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">
                                Martedì
                            </Typography>
                            <Divider sx={{ my: 1 }} />
                            <Typography variant="subtitle1">Colazione</Typography>
                            <Typography variant="body2" gutterBottom>
                                Uova strapazzate, pane integrale, avocado
                            </Typography>

                            <Typography variant="subtitle1">Pranzo</Typography>
                            <Typography variant="body2" gutterBottom>
                                Pasta integrale con tonno e pomodorini
                            </Typography>

                            <Typography variant="subtitle1">Cena</Typography>
                            <Typography variant="body2" gutterBottom>
                                Bistecca di manzo, quinoa, broccoli
                            </Typography>

                            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="body2">
                                    <strong>Calorie:</strong> 2200 kcal
                                </Typography>
                                <Typography variant="body2">
                                    <strong>Proteine:</strong> 150g
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Button
                variant="contained"
                startIcon={<Restaurant />}
                sx={{ mt: 3 }}
            >
                Aggiungi pasto
            </Button>
        </Box>
    );
};

// Componente principale
const Profile = () => {
    const [user, setUser] = useState(null);
    const [backendData, setBackendData] = useState("");
    const [error, setError] = useState("");
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        fetch("/.auth/me")
            .then((res) => res.json())
            .then((data) => {
                if (data.clientPrincipal) {
                    setUser(data.clientPrincipal);
                    fetchBackend(data.clientPrincipal.accessToken);
                } else {
                    setError("utente non autenticato");
                }
            })
            .catch(() => setError("errore recupero utente"));
    }, []);

    const fetchBackend = async (token) => {
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
            console.log("json result", result);
            setBackendData(result.message);
        } catch (error) {
            setError("errore " + error.message);
        }
    };

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    if (error) return (
        <Container maxWidth="md" sx={{ mt: 4, textAlign: 'center' }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h5" color="error" gutterBottom>
                    Errore
                </Typography>
                <Typography variant="body1">{error}</Typography>
                <Button
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={() => window.location.href = "/"}
                >
                    Torna alla Home
                </Button>
            </Paper>
        </Container>
    );

    if (!user) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
            <CircularProgress />
            <Typography variant="h6" sx={{ ml: 2 }}>
                Caricamento...
            </Typography>
        </Box>
    );

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                    <Typography variant="h4" component="h1">
                        Profilo Personale
                    </Typography>
                    <Button
                        variant="outlined"
                        color="error"
                        startIcon={<Logout />}
                        onClick={() => window.location.href = "/.auth/logout"}
                    >
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
            </Paper>

            {activeTab === 0 && <ProfileInfo user={user} />}
            {activeTab === 1 && <GymLogbook />}
            {activeTab === 2 && <NutritionDiary />}
        </Container>
    );
};

export default Profile;