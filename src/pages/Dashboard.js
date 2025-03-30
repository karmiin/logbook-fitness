// src/pages/Dashboard.js
import React from "react";
import { Container, Box, AppBar, Toolbar, Typography, Button, Grid, Card, CardContent, Paper } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Dashboard = () => {
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Dashboard
                    </Typography>
                    <Button color="inherit" component={RouterLink} to="/login">
                        Login
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/register">
                        Register
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/protected">
                        Protected
                    </Button>
                </Toolbar>
            </AppBar>
            <Box my={4}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ p: 2, boxShadow: 3 }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Statistiche
                                </Typography>
                                <Typography variant="body2">
                                    Dati e grafici sulle performance vanno mostrati qui.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 2, boxShadow: 3 }}>
                            <Typography variant="h6" gutterBottom>
                                Attivit\à Recenti
                            </Typography>
                            <Typography variant="body2">
                                Elenco delle operazioni recenti e notifiche.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Dashboard;