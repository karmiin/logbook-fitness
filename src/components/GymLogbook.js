import React from "react";
import { Box, Typography, Divider, Card, CardContent, Button } from "@mui/material";
import { FitnessCenter } from "@mui/icons-material";

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
                            \• Panca piana: 4 serie x 8 reps - 80kg
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            \• Panca inclinata: 3 serie x 10 reps - 65kg
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            \• Push-down: 3 serie x 12 reps - 30kg
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
                            \• Squat: 4 serie x 8 reps - 100kg
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            \• Leg press: 3 serie x 10 reps - 140kg
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            \• Leg extension: 3 serie x 12 reps - 60kg
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
            <Button variant="contained" startIcon={<FitnessCenter />} sx={{ mt: 3 }}>
                Aggiungi allenamento
            </Button>
        </Box>
    );
};

export default GymLogbook;