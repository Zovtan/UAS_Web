import React, { useState } from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import logoPurp from "../assets/Jumlah.png";
import "../styles/register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RegistrationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [isEmailUnique, setIsEmailUnique] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /*   const handleSubmit = (e) => {
    e.preventDefault();
    // Check if passwords match before submitting
    if (formData.password !== formData.confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    setPasswordsMatch(true);
    // Add your form submission logic here
    navigate("/");
  }; */

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match before submitting
    if (formData.password !== formData.confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    setPasswordsMatch(true);

    try {
      // Send a request to the backend to check username availability
      const response = await axios.post(
        "http://localhost:3031/profile/register",
        {
          email: formData.email,
          username: formData.username,
          password: formData.password
        }
      );

      if (response.status === 201) {
        setIsEmailUnique(true)
        alert("Registrasi Berhasil")
        navigate("/");
      }

    } catch (err) {
      setIsEmailUnique(false);
      console.error(err);
    }
  };

  return (
    <Container
      disableGutters
      className="regCont"
      maxWidth="x1"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingX: "5vh",
        height: "100vh",
      }}
    >
      <div
        className="header"
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "8vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          position: "fixed",
          padding: "30px 10%",
          zIndex: "9",
        }}
      >
        <Box component="img" src={logoPurp} height="2.5em" />
      </div>

      <Typography variant="h3" textAlign="center" sx={{ paddingTop: "1.5em" }}>
        Daftar Akun
      </Typography>

      <Typography variant="h6" textAlign="center" sx={{ mb: "3vh" }}>
        Daftar akun dan dapatkan kemudahan dalam mengantri di restoran favorit
        kamu dan keluarga
      </Typography>

      <Box
        className="daftar"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          padding: "5vh",
          width: "70vh",
          borderRadius: "1vh",
        }}
      >
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Box>
            <Box>
              <Typography className="detail">Nama Pengguna</Typography>
              <TextField
                type="text"
                placeholder="Masukkan Nama Pengguna..."
                required
                fullWidth
                name="username"
                value={formData.username}
                onChange={handleChange}
                sx={{ mb: "2vh" }}
              />
            </Box>
            <Box>
              <Typography className="detail">Email</Typography>
              <TextField
                type="email"
                placeholder="Masukkan Email..."
                required
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                sx={{ mb: "2vh" }}
              />
            </Box>
            <Box>
              <Typography className="detail">Katasandi</Typography>
              <TextField
                type="password"
                placeholder="Masukkan Katasandi..."
                required
                fullWidth
                name="password"
                value={formData.password}
                onChange={handleChange}
                sx={{ mb: "2vh" }}
              />
            </Box>

            <Box>
              <Typography className="detail">Ulangi Katasandi</Typography>
              <TextField
                type="password"
                placeholder="Ulangi Katasandi..."
                required
                fullWidth
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                sx={{ mb: "5vh" }}
              />
            </Box>
          </Box>
          {!passwordsMatch && (
            <Typography color="error" sx={{ mb: 2 }}>
              Password tidak sama!
            </Typography>
          )}
          {!isEmailUnique && (
            <Typography color="error" sx={{ mb: 2 }}>
              Email sudah terdaftarkan!
            </Typography>
          )}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              sx={{ width: "100%" }}
              onClick={handleSubmit}
            >
              Daftar
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default RegistrationForm;
