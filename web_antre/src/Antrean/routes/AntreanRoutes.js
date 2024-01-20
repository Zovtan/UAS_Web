import React from "react";
import HomeLayout from "../pages/HomeLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RestoDetails from "../pages/RestoDetails";
import NotFound from "../pages/NotFound"; // Import the Not Found component
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Konfirmasi from "../pages/Konfirmasi";
import Congratulation from "../pages/Congratulation";
import LoginApp from "../pages/LoginApp"
import Register from "../pages/Register"
import Profile from "../pages/Profile"


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
