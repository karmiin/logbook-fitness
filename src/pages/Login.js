import React, { useState, useEffect } from "react";
import { Container, Box, Card, CardContent, Typography, Button } from "@mui/material";

const Login = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("/.auth/me")
            .then((res) => res.json())
            .then((data) => {
                if (data.clientPrincipal) {
                    setUser(data.clientPrincipal);
                }
            })
            .catch(() => setUser(null));
    }, []);

    const handleLogin = () => {
        window.location.href = "/.auth/login/github";
    };

    const handleLogout = () => {
        window.location.href = "/.auth/logout";
    };

    return (
        <Container maxWidth="xs">
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Card sx={{ width: "100%", p: 2, boxShadow: 3 }}>
                    <CardContent>
                        <Typography variant="h5" align="center" gutterBottom>
                            {user ? `Benvenuto, ${user.userDetails}!` : "Login"}
                        </Typography>

                        {!user ? (
                            <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleLogin}>
                                Accedi con GitHub
                            </Button>
                        ) : (
                            <Button fullWidth variant="contained" color="secondary" sx={{ mt: 2 }} onClick={handleLogout}>
                                Logout
                            </Button>
                        )}
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
};

export default Login;
