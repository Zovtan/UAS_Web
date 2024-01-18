import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
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
import CS from "../assets/credit score.png"

const Profile = () => {
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    noHp: "",
    password: "",
    confirmPassword: "",
  });
  const [isEditing, setIsEditing] = useState(false);

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
      const token = localStorage.getItem("token");
      const response = await axios.patch(
        `http://localhost:3031/profile/${profileId}`,
        {
          username: profile.username,
          email: profile.email,
          noHp: profile.noHp,
          password: profile.password,
        },
        { headers: { auth: token } } // Move headers to the correct position
      );

      if (response.status === 200) {
        localStorage.setItem("username", profile.username);
        alert("Edit Berhasil");
      }
    } catch (err) {
      console.error(err);
    }
  };

  /* 
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  }; */

  return (
    <>
      <Navbar />
      <Container
        maxWidth="x1"
        sx={{
          mt: "15vh",
          display: "flex",
          flexDirection: "row",
          height: "50vh",
        }}
      >
        <Box sx={{ background: "red", padding: "3vh" }}>
          <Avatar alt={pfp} src="/static/images/avatar/2.jpg" />
          <Typography>Pengguna Normal</Typography>
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
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
              background: "green",
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
              variant="standard"
              /* disabled={!isEditing} */ // Disable if not in edit mode
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
              variant="standard"
              /* disabled={!isEditing} */ // Disable if not in edit mode
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
              variant="standard"
              /* disabled={!isEditing} */ // Disable if not in edit mode
            />
            <TextField
              type="password"
              label="Password"
              color="primary"
              value={profile.password}
              onChange={(e) => {
                setProfile({ ...profile, password: e.target.value });
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon color="primary" />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              /* disabled={!isEditing} */ // Disable if not in edit mode
            />
          </Box>
          <Box
            sx={{
              background: "yellow",
              display: "flex",
              justifyContent: "right",
              width: "100%",
            }}
          >
            <Button
              color="error" /* onClick={handleCancelClick} */ /* disabled={!isEditing} */
            >
              Batal
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpdate} /* disabled={isEditing} */
            >
              Edit Profil
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Profile;
