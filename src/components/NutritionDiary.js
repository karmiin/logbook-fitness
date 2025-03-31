import React from "react";
import { Box, Typography, Divider, Card, CardContent, Grid, Button } from "@mui/material";
import { Restaurant } from "@mui/icons-material";

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
                            <Typography variant="subtitle1">
                                Colazione
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Avena con latte e frutti di bosco, caffè
                            </Typography>
                            <Typography variant="subtitle1">
                                Pranzo
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Petto di pollo, riso integrale, insalata mista
                            </Typography>
                            <Typography variant="subtitle1">
                                Cena
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Salmone, patate dolci, verdure grigliate
                            </Typography>
                            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="body2">
                                    \ <strong>Calorie:</strong> 2100 kcal
                                </Typography>
                                <Typography variant="body2">
                                    \ <strong>Proteine:</strong> 140g
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
                            <Typography variant="subtitle1">
                                Colazione
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Uova strapazzate, pane integrale, avocado
                            </Typography>
                            <Typography variant="subtitle1">
                                Pranzo
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Pasta integrale con tonno e pomodorini
                            </Typography>
                            <Typography variant="subtitle1">
                                Cena
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Bistecca di manzo, quinoa, broccoli
                            </Typography>
                            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="body2">
                                    \ <strong>Calorie:</strong> 2200 kcal
                                </Typography>
                                <Typography variant="body2">
                                    \ <strong>Proteine:</strong> 150g
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Button variant="contained" startIcon={<Restaurant />} sx={{ mt: 3 }}>
                Aggiungi pasto
            </Button>
        </Box>
    );
};

export default NutritionDiary;