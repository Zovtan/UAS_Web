import React from "react";
import HomeLayout from "./components/HomeLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RestoDetails from "./components/RestoDetails";
import NotFound from "./components/NotFound"; // Import the Not Found component
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Konfirmasi from "./components/Konfirmasi";
import Congratulation from "./components/Congratulation";
import LoginApp from "./components/LoginApp"
import Register from "./components/Register"
import Profile from "./components/Profile"


const AntreanApp = () => {
  //theme utama Antrean
  const primary = {
    main: "#7472cc",
    light: "#9f9ed3",
    dark: "#5c5ba1",
    contrastText: "#fff",
  };


  const theme = createTheme({
    palette: {
      primary: primary,
      // You can also define other palettes like secondary if needed
      // secondary: { ... },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomeLayout />} />
          <Route path="/login" element={<LoginApp />} />
          <Route path="/register" element={<Register />} />
          <Route path="/restoran/:restaurantId" element={<RestoDetails />} />
          <Route path="/restoran/:restaurantId/konfirmasi" element={<Konfirmasi />} />
          <Route path="/selamat!" element={<Congratulation/>}/>
          <Route path="/profil/:profileId" element={<Profile/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AntreanApp;
