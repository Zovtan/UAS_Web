import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import {
  Box,
  Avatar,
  Container,
  TextField,
  InputAdornment,
  Button,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PasswordIcon from "@mui/icons-material/Password";
import CS from "../assets/credit score.png";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  // Cek status login
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("loggedInStatus");
    // jika blm login, redirect ke login
    if (loggedInStatus === null || loggedInStatus === "false") {
      alert("Kalau mau mulai ngantri, login dulu!");
      navigate("/login");
    }
  }, []);

  const [profile, setProfile] = useState({
    username: "",
    email: "",
    noHp: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const profileId = localStorage.getItem("id");
  const pfp = localStorage.getItem("username");

  useEffect(() => {
    //fetch profile yg login saat ini
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:3031/profile/${profileId}`,
          { headers: { auth: token } }
        );
        setProfile(response.data.profile[0]);
      } catch (error) {
        console.error("Error fetching profile details:", error);
        console.log("Error response from server:", error.response);
      }
    };

    fetchProfile();
  }, [profileId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      if (profile.newPassword !== profile.confirmPassword) {
        setPasswordsMatch(false);
        return; //return kosong memaksakan berhenti fungi
      }

      setPasswordsMatch(true);

      const token = localStorage.getItem("token");
      const response = await axios.patch(
        `http://localhost:3031/profile/${profileId}`,
        {
          username: profile.username,
          email: profile.email,
          noHp: profile.noHp,
          password: profile.newPassword,
          confirmPassword: profile.confirmPassword,
        },
        { headers: { auth: token } } // Move headers to the correct position
      );

      if (response.status === 200) {
        localStorage.setItem("username", profile.username);
        alert("Edit Berhasil");
        setIsEditing(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <>
      <Navbar />
      <Container
        maxWidth="x1"
        sx={{
          mt: "15vh",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          height: "50vh",
        }}
      >
        <Box sx={{ background: "red", padding: "3vh" }}>
          <Avatar alt={pfp} src="/static/images/avatar/2.jpg" />
          <Typography>Pengguna Standard</Typography>
          <Box
            component="img"
            sx={{
              height: "20vh",
              width: "25vh",
            }}
            alt="Credit Score"
            src={CS}
          />
        </Box>
        <Box
          sx={{
            background: "blue",
            flex: "1",
            padding: "3vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              background: "white",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              label="Nama"
              color="primary"
              value={profile.username}
              onChange={(e) => {
                setProfile({ ...profile, username: e.target.value });
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon color="primary" />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{ shrink: true }}
              variant="standard"
              sx={{
                "& .MuiInputBase-input.Mui-disabled": {
                  WebkitTextFillColor: "black",
                },
                "& .MuiInputLabel-root": {
                  color: "black", // Change label color to black
                },
              }}
              disabled={!isEditing} // Disable if not in edit mode
            />
            <TextField
              label="Email"
              color="primary"
              value={profile.email}
              onChange={(e) => {
                setProfile({ ...profile, email: e.target.value });
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon color="primary" />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{ shrink: true }}
              variant="standard"
              sx={{
                "& .MuiInputBase-input.Mui-disabled": {
                  WebkitTextFillColor: "black",
                },
                "& .MuiInputLabel-root": {
                  color: "black", // Change label color to black
                },
              }}
              disabled={!isEditing} // Disable if not in edit mode
            />
            <TextField
              label="No. Telpon"
              color="primary"
              value={profile.noHp}
              onChange={(e) => {
                setProfile({ ...profile, noHp: e.target.value });
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon color="primary" />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{ shrink: true }}
              variant="standard"
              sx={{
                "& .MuiInputBase-input.Mui-disabled": {
                  WebkitTextFillColor: "black",
                },
                "& .MuiInputLabel-root": {
                  color: "black", // Change label color to black
                },
              }}
              disabled={!isEditing} // Disable if not in edit mode
            />
            {/* hanya muncul dalam mode editing */}
            {isEditing && (
              <>
                <TextField
                  type="password"
                  label="Password"
                  color="primary"
                  value={profile.newPassword}
                  onChange={(e) => {
                    setProfile({ ...profile, newPassword: e.target.value });
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PasswordIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{ shrink: true }}
                  variant="standard"
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "black", // Change label color to black
                    },
                  }}
                />
                <TextField
                  type="password"
                  label="Konfirmasi Password"
                  color="primary"
                  value={profile.confirmPassword}
                  onChange={(e) => {
                    setProfile({ ...profile, confirmPassword: e.target.value });
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PasswordIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{ shrink: true }}
                  variant="standard"
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "black", // Change label color to black
                    },
                  }}
                />
              </>
            )}
          </Box>
          <Box
            sx={{
              background: "yellow",
              display: "flex",
              justifyContent: "right",
              width: "100%",
            }}
          >
            {/* hanya muncul dalam mode editing */}
            {isEditing && (
              <Button color="error" onClick={handleCancelClick}>
                Batal
              </Button>
            )}
            {!passwordsMatch && (
              <Typography color="error" sx={{ mb: 2 }}>
                Password tidak sama!
              </Typography>
            )}
            {/* cek mode editing */}
            {isEditing ? (
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpdate}
              >
                Kirim
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleEditClick}
              >
                Edit Profil
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Profile;
