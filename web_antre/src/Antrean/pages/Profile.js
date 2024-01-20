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
  const [isEmailUnique, setIsEmailUnique] = useState(true);

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
    setPasswordsMatch(true);
    setIsEmailUnique(true);

    try {
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

      // Check the status code and handle each error case separately
      if (err.response) {
        const statusCode = err.response.status;

        if (statusCode === 402) {
          setIsEmailUnique(false); //cek keunikan email
        } else if (statusCode === 403) {
          setPasswordsMatch(false); //cek kesamaan password
        }
      } else {
        console.error("An unexpected error occurred:", err.message);
      }
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `http://localhost:3031/profile/${profileId}`,
        { headers: { auth: token } }
      );

      if (response.status === 200) {
        localStorage.removeItem("loggedInStatus");
        localStorage.removeItem("id");
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        alert("Hapus profile berhasil");
        navigate("/login");
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
          mt: { xs: "10vh", md: "15vh" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            padding: "3vh",
            borderTopLeftRadius: "1vh",
            borderTopRightRadius: { xs: "1vh", md: "0vh" },
            borderBottomLeftRadius: { xs: "0vh", md: "1vh" },
            border: 2,
            borderColor: "lightgrey",
            boxShadow: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Avatar
              alt={pfp}
              src="/static/images/avatar/2.jpg"
              sx={{
                mr: { xs: "0vh", md: "2vh" },
                mb: { xs: "1vh", md: "0vh" },
              }}
            />
            <Typography>Pengguna Standard</Typography>
          </Box>

          <Box
            component="img"
            sx={{
              height: "20vh",
              width: "25vh",
              mt: "2vh",
            }}
            alt="Credit Score"
            src={CS}
          />
        </Box>
        <Box
          sx={{
            flex: "1",
            padding: "3vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "3vh",
            borderBottomLeftRadius: { xs: "1vh", md: "0vh" },
            borderBottomRightRadius: "1vh",
            borderTopRightRadius: { xs: "0vh", md: "1vh" },
            border: 2,
            borderColor: "lightgrey",
            boxShadow: 2,
          }}
        >
          <Box
            sx={{
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
                {isEditing && !profile.newPassword && (
                  <Typography color="error">Mohon isi password untuk melanjutkan!</Typography>
                )}
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
          {/* hanya muncul dalam mode editing */}
          {isEditing && !passwordsMatch && (
            <Typography color="error" sx={{ mt: 1, alignSelf: "end" }}>
              Password tidak sama!
            </Typography>
          )}
          {isEditing && !isEmailUnique && (
            <Typography color="error" sx={{ mt: 1, alignSelf: "end" }}>
              Email sudah terpakai!
            </Typography>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              mt: "2vh",
            }}
          >
            <span>
              {isEditing && (
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleDelete}
                  sx={{ justifySelf: "left" }}
                >
                  Hapus Akun
                </Button>
              )}
            </span>
            <span>
              {isEditing && (
                <Button color="error" onClick={handleCancelClick}>
                  Batal
                </Button>
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
            </span>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Profile;
