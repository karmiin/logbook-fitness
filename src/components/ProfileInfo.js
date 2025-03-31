import React from "react";
import { Box, Typography, Button, Avatar, Card, CardContent, Grid, Divider } from "@mui/material";
import { Edit } from "@mui/icons-material";

const ProfileInfo = ({ user }) => {
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
                            <Avatar sx={{ width: 120, height: 120, mx: 'auto', mb: 2, bgcolor: 'primary.main' }}>
                                {userDetails.name.charAt(0).toUpperCase()}
                            </Avatar>
                            <Typography variant="h5" gutterBottom>
                                {userDetails.name}
                            </Typography>
                            <Button startIcon={<Edit />} variant="outlined" size="small" sx={{ mt: 1 }}>
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

export default ProfileInfo;