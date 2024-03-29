import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import dayjs from "dayjs";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
  Dialog,
  TextField,
  DialogTitle,
  DialogActions,
  DialogContent,
  Box,
  InputAdornment,
} from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import GroupsIcon from "@mui/icons-material/Groups";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { useNavigate } from "react-router-dom";
import KontakImg from "../assets/kontak info.png";
import InfoReservasi from "../assets/reservasi info.png";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Konfirmasi = () => {
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

  //mengperbolehkan pengambilan data dari url
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // mengambil data dari URL
  const id = queryParams.get("id");
  const nama = queryParams.get("nama");
  const esWaktu = queryParams.get("esWaktu");
  const tanggal = queryParams.get("tanggal");
  const tanggalRumus = queryParams.get("tanggalRumus");
  const waktu = queryParams.get("waktu");
  const jumlahOrang = queryParams.get("jumlahOrang");
  const kodePromo = queryParams.get("kodePromo");

  // Get the current time
  const currentTime = new Date();
  const intEsWaktu = parseInt(esWaktu);

  // Assuming you have a time string in the format "HH MM"
  const givenTimeString = waktu; // Example time string, "14 30" represents 2:30 PM

  // Split the given time string into hours and minutes
  const [givenHours, givenMinutes] = givenTimeString.split(" ").map(Number);

  // Calculate the total minutes for both current and given time
  const currentTotalMinutes =
    currentTime.getHours() * 60 + currentTime.getMinutes();
  const givenTotalMinutes = givenHours * 60 + givenMinutes;

  // Calculate the time difference in minutes
  let timeDifferenceMinutes =
    givenTotalMinutes - currentTotalMinutes + intEsWaktu;

  //selisih dari hari yg di inpiut dgn tgl hari ini
  const dayMinutesDifference = -1 * dayjs().diff(tanggalRumus, "minutes");

  // If the time difference is negative, add 1440 minutes (24 hours) to it
  /*   if (timeDifferenceMinutes < 0) {
    timeDifferenceMinutes += 1440;
  } */

  //jika hari yg di pilih adalah dimasa depan, tambahkan menitnya
  if (dayMinutesDifference > 0) {
    timeDifferenceMinutes += dayMinutesDifference;
  }

  //jika menit melebihi 60, maka diubah menjadi 1 jam
  let timeDifferenceHours = 0;
  if (timeDifferenceMinutes >= 60) {
    timeDifferenceHours = Math.floor(timeDifferenceMinutes / 60);
    timeDifferenceMinutes %= 60;
  }

  let timeDifferenceDays = 0;
  if (timeDifferenceHours >= 24) {
    timeDifferenceDays = Math.floor(timeDifferenceHours / 24);
    timeDifferenceHours %= 24;
  }

  //angka rng karena blm ada server :p
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    const min = 1;
    const max = 999;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    const formattedRandomNumber = randomNum.toString().padStart(3, "0");
    setRandomNumber(formattedRandomNumber);
  }, []);

  //state popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  //buka tutup popup
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  //handle konfirmasi
  const handleConfirmation = () => {
    // Add your confirmation logic here
    // For example, you can make an API call to confirm the reservation
    // Once the confirmation is successful, you can navigate to another page
    // using the navigate function
    navigate("/selamat!"); // Replace with your desired destination
    closePopup();
  };

  //menarik id dari local storage
  const userId = localStorage.getItem("id");
  const [user, setUser] = useState([]);

  //fetch profile pengguna
  useEffect(() => {
    const fetchRestos = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:3031/profile/${userId}`,
          { headers: { auth: token } }
        );
        setUser(response.data.profile[0]);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchRestos(); //refresh sendiri
  }, [userId]);

  return (
    <>
      <Navbar />
      <Typography variant="h4" mt="5rem" textAlign="center" fontWeight="bolder">
        {nama}
      </Typography>
      <Container
        disableGutters
        maxWidth="x1"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "revert" },
          marginTop: "3vh",
          gap: "10vh",
          padding: { xs: "0", md: "0vh 5vh" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: "30%" },
            flexDirection: "column",
            alignItems: { xs: "center", md: "none" },
          }}
        >
          <Box
            component="img"
            src={InfoReservasi}
            alt="info reservasi"
            sx={{
              width: "55vh",
              height: "25vh",
              display: { xs: "none", md: "flex" },
            }}
          />
          <Card
            sx={{
              flex: "0 0 auto",
              width: { xs: "80%", md: "55vh" },
              minHeight: { xs: "none", md: "40vh" },
            }}
          >
            <CardHeader
              title="Info Reservasi"
              sx={{
                backgroundColor: "#7472cc",
                color: "white",
                textAlign: "center",
              }}
            ></CardHeader>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "10",
                gap: "1vh",
              }}
            >
              <Typography>
                <DateRangeIcon color="primary" sx={{ translate: "0 0.5vh" }} />{" "}
                Tanggal Antri: {tanggal}
              </Typography>
              <Typography>
                <AvTimerIcon color="primary" sx={{ translate: "0 0.7vh" }} />{" "}
                Estimasi Waktu Antri: ~
                {timeDifferenceDays > 0 ? `${timeDifferenceDays} hari ` : ""}
                {timeDifferenceHours > 0 ? `${timeDifferenceHours} jam ` : ""}
                {timeDifferenceMinutes > 0
                  ? `${timeDifferenceMinutes} menit`
                  : ""}
                {timeDifferenceMinutes < 0
                  ? `${timeDifferenceMinutes} menit`
                  : ""}
              </Typography>
              <Typography>
                <GroupsIcon color="primary" sx={{ translate: "0 0.7vh" }} />{" "}
                Jumlah Orang: {jumlahOrang}
              </Typography>
              <Typography>
                {randomNumber !== null && (
                  <p>
                    <ConfirmationNumberIcon
                      color="primary"
                      sx={{ translate: "0 0.7vh" }}
                    />{" "}
                    No. Antrian: {randomNumber}
                  </p>
                )}
              </Typography>
              <Typography>
                {kodePromo ? (
                  <LoyaltyIcon color="primary" sx={{ translate: "0 0.7vh" }} />
                ) : null}
                {kodePromo}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: "30%" },
            flexDirection: "column",
            alignItems: { xs: "center", md: "none" },
          }}
        >
          <Box
            component="img"
            src={KontakImg}
            alt="dekorasi kontak"
            sx={{
              width: "55vh",
              height: "25vh",
              display: { xs: "none", md: "flex" },
            }}
          />
          <Card
            sx={{
              flex: "0 0 auto",
              width: { xs: "80%", md: "55vh" },
              minHeight: { xs: "none", md: "40vh" },
            }}
          >
            <CardHeader
              title="Kontak Pengguna"
              sx={{
                backgroundColor: "#7472cc",
                color: "white",
                textAlign: "center",
              }}
            ></CardHeader>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "10",
                gap: "1vh",
              }}
            >
              <TextField
                label="Nama"
                color="primary"
                value={user.username}
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
                  '& .MuiInputLabel-root': {
                    color: 'black', // Change label color to black
                  },
                }}
                disabled
              />
              <TextField
                label="Email"
                color="primary"
                value={user.email}
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
                  '& .MuiInputLabel-root': {
                    color: 'black', // Change label color to black
                  },
                }}
                disabled
              />
              <TextField
                label="No. Telpon"
                color="primary"
                value={user.noHp}
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
                  '& .MuiInputLabel-root': {
                    color: 'black', // Change label color to black
                  },
                }}
                disabled
              />
            </CardContent>
          </Card>
        </Box>
      </Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "5vh 0vh",
        }}
      >
        <Button variant="contained" size="large" onClick={openPopup}>
          Konfirmasi
        </Button>
      </Box>

      <Box sx={{ ml: "3vh", pb: "3vh" }}>
        <Button
          variant="text"
          size="large"
          color="error"
          onClick={() => {
            navigate(`/restoran/${id}`);
          }}
        >
          Kembali
        </Button>
      </Box>

      <Dialog open={isPopupOpen} onClose={closePopup}>
        <DialogTitle>Apakah Semua Sudah Sesuai?</DialogTitle>
        <DialogContent>
          {/* Add content for your confirmation message */}
          <Typography variant="body1">Tekan ya untuk melanjutkan</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={closePopup} color="error">
            Tidak
          </Button>
          <Button onClick={handleConfirmation} color="primary">
            Ya
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Konfirmasi;
