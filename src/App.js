import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Login from "./pages/Login";
import PrivatePage from "./pages/PrivatePage";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Router>

                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Registration />} />
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/protected" element={<PrivatePage />} />
                    </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;