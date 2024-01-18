import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/RestoDetails.css";
import Navbar from "./Navbar.js";
import NotFound from "./NotFound.js";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Rating,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  InputAdornment,
  Box,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import { limitAlamat } from "./utils/limitTexts.js";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";
import axios from "axios";

const RestoDetails = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { restaurantId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //fetch resto dgn id dlm url
    const fetchRestaurantDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3031/restoran/${restaurantId}`
        );
        console.log(response.data.resto[0]);
        setRestaurant(response.data.resto[0]);
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
      }
    };

    fetchRestaurantDetails();
  }, [restaurantId]);

  // State variables to store the input values
  const [tanggal, setTanggal] = useState(dayjs(new Date()));
  const [waktu, setWaktu] = useState(dayjs());
  const [jumlahOrang, setJumlahOrang] = useState(1);
  const [kodePromo, setKodePromo] = useState("");

  //state input eror
  const [jumlahOrangError, setJumlahOrangError] = useState("");

  const handleFormSubmit = () => {
    //apakah form valid?
    let isFormValid = true;

    //validasi jumlah org
    if (jumlahOrang <= 0 || jumlahOrang > 20) {
      // Disable submit when jumlahOrang is not a positive number or above 20.
      setJumlahOrangError("Jumlah orang harus berada antara 1 dan 20.");
      isFormValid = false;
      return;
    }

    // Validasi kelengkapan
    if (!tanggal.isValid() || !waktu.isValid()) {
      // Disable submit when date or time is not valid. pakai alert karna g bisa pake helper text
      alert("Mohon isi tanggal dan waktu dengan lengkap");
      isFormValid = false;
      return;
    }

    //validasi tanggal masa lalu
    const currentDate = dayjs().startOf("day"); // Set the time components to the start of the day
    const selectedDate = tanggal.startOf("day"); // Set the time components of the selected date to the start of the day

    if (selectedDate.isBefore(currentDate)) {
      // Disable submit when a past date is picked.
      alert("Tidak dapat memilih tanggal yang sudah lewat");
      isFormValid = false;
    }

    // cara hitung outdated, dibawah patch menit terakhir dgn penjelasan
    /*     //validasi waktu masa lalu tapi diberi kelegaan 5 menit agar tdk ditolak pada detik pertama di buat form
    const currentTime = dayjs().subtract(5, "minutes");
    const selectedTime = waktu; // Set the time components to the start of the minute
    
    if (selectedTime.isBefore(currentTime)) {
      // Disable submit when a time within the 5-minute window is picked.
      alert("Tidak dapat memilih waktu yang sudah lewat")
      isFormValid = false;
    } */

    //berikut adalah pengecekan yg lbh akurat dgn kode yg sama dari konfirmasi.js
    const currentTime = new Date();
    const [givenHours, givenMinutes] = waktu
      .format("HH mm")
      .split(" ")
      .map(Number); //mengambil jam dan menit dan di pisah dalah nilai masing2 serta diubah menjadi int

    //total menit waktu sekarang
    const currentTotalMinutes =
      currentTime.getHours() * 60 + currentTime.getMinutes();
    const givenTotalMinutes = givenHours * 60 + givenMinutes + 5; //+5 utk memberi kelonggaaran saat menginput form

    //selisih total menit input dgn total menit sekarang
    let timeDifferenceMinutes = givenTotalMinutes - currentTotalMinutes;

    //selisih total menit hari ini dengan total menit hari yg di input
    const dayMinutesDifference = -1 * dayjs().diff(tanggal, "minutes");

    //jika selisih positif berarti
    if (dayMinutesDifference > 0) {
      timeDifferenceMinutes += dayMinutesDifference;
    }

    if (timeDifferenceMinutes < 0) {
      alert("Tidak dapat memilih waktu yang sudah lewat");
      isFormValid = false;
    }

    // mengirim data melalui url agar dapat dipakai ulang
    if (isFormValid) {
      const queryParams = new URLSearchParams();
      queryParams.append("id", restaurant.resto_id);
      queryParams.append("nama", restaurant.nama);
      queryParams.append("esWaktu", restaurant.esWaktu);
      queryParams.append("tanggal", tanggal.format("dddd, DD MMMM YYYY"));
      queryParams.append("tanggalRumus", tanggal);
      /*     queryParams.append("waktu", waktu.format("h mm A")); */
      queryParams.append("waktu", waktu.format("HH mm"));
      queryParams.append("jumlahOrang", jumlahOrang);
      queryParams.append("kodePromo", kodePromo);

      // Navigate to the "konfirmasi" page with query parameters
      navigate(
        `/restoran/${restaurant.resto_id}/konfirmasi?${queryParams.toString()}`
      );
    }
  };

  const checkLogin = () => {
    // Cek status login
    const loggedInStatus = localStorage.getItem("loggedInStatus");
    // jika blm login, redirect ke login
    if (loggedInStatus === null || loggedInStatus === "false") {
      alert("Kalau mau mulai ngantri, login dulu!");
      navigate("/login");
    } else {
      setIsFormOpen(true)
    }
  };

  if (!restaurant) {
    return <NotFound />;
  }

  return (
    <>
      <Navbar />
      <Container
        maxWidth="x1"
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#d9e5ff",
          mt: "3em",
        }}
      >
        <Box
          component="img"
          src={restaurant.img}
          alt={restaurant.nama}
          sx={{
            width: { xs: "80vh", md: "120vh" },
            height: { xs: "40vh", md: "45vh" },
          }}
        />
      </Container>

      <Container
        maxWidth="x1"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: "2vh",
          padding: { xs: "none", md: "0 15vh" },
        }}
      >
        <span>
          <Typography variant="h5" fontWeight="bolder">
            {restaurant.nama}
          </Typography>
          <Rating
            name="read-only"
            value={parseInt(restaurant.rating, 10)}
            readOnly
          />{" "}
          {/* ubah rating jadi int */}
        </span>

        <span className="rightMiniInfo">
          <Typography variant="h6" fontWeight="bolder">
            <LocationOnIcon color="primary" />{" "}
            {restaurant.alamat && limitAlamat(restaurant.alamat)}
            {/* memotong alamat yg kepanjangan */}
          </Typography>
          <Typography variant="h6" fontWeight="bolder">
            <GpsFixedIcon color="primary" /> {restaurant.jarak}
          </Typography>
        </span>
      </Container>

      <Container
        disableGutters
        maxWidth="x1"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "revert" },
          marginTop: "3vh",
          gap: "3vh",
          padding: { xs: "0", md: "0vh 5vh" },
        }}
      >
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            width: "50vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <>
            {restaurant.keramaian === "sepi" && (
              <PersonIcon sx={{ fontSize: 120, color: "green" }} />
            )}{" "}
            {restaurant.keramaian === "sedang" && (
              <PeopleIcon sx={{ fontSize: 120, color: "#ffc400" }} />
            )}{" "}
            {restaurant.keramaian === "ramai" && (
              <GroupsIcon sx={{ fontSize: 120, color: "red" }} />
            )}{" "}
            <Typography
              variant="h5"
              color={
                restaurant.keramaian === "sepi"
                  ? "green"
                  : restaurant.keramaian === "sedang"
                  ? "#ffc400"
                  : "red"
              }
            >
              ~{restaurant.esWaktu} menit{" "}
              <span className="waktuAntri">waktu antri</span>
            </Typography>
          </>
        </Box>

        <Card
          sx={{
            flex: "0 0 auto",
            width: { xs: "80%", md: "48vh" },
            textAlign: { xs: "center", md: "start" },
          }}
        >
          <CardHeader
            title="Deskripsi"
            sx={{ backgroundColor: "#7472cc", color: "white" }}
          ></CardHeader>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "10",
              gap: "1vh",
            }}
          >
            <Typography>{restaurant.desc}</Typography>
            <Typography sx={{ whiteSpace: "pre-line" }}>
              Jadwal Kami:
              <br />
              {restaurant.jadwal}
            </Typography>
          </CardContent>
        </Card>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            width: "50vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <>
            {restaurant.keramaian === "sepi" && (
              <PersonIcon sx={{ fontSize: 120, color: "green" }} />
            )}{" "}
            {restaurant.keramaian === "sedang" && (
              <PeopleIcon sx={{ fontSize: 120, color: "#ffc400" }} />
            )}{" "}
            {restaurant.keramaian === "ramai" && (
              <GroupsIcon sx={{ fontSize: 120, color: "red" }} />
            )}
          </>{" "}
          <Typography
            variant="h5"
            color={
              restaurant.keramaian === "sepi"
                ? "green"
                : restaurant.keramaian === "sedang"
                ? "#ffc400"
                : "red"
            }
          >
            ~{restaurant.esWaktu} menit{" "}
            <span className="waktuAntri">waktu antri</span>
          </Typography>
        </Box>

        <Card
          sx={{
            flex: "0 0 auto",
            width: { xs: "80%", md: "48vh" },
            textAlign: { xs: "center", md: "end" },
          }}
        >
          <CardHeader
            title="Kontak"
            sx={{ backgroundColor: "#7472cc", color: "white" }}
          ></CardHeader>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "10",
              gap: "1vh",
            }}
          >
            <Typography sx={{ whiteSpace: "pre-line" }}>
              {restaurant.kontak}
            </Typography>
          </CardContent>
        </Card>
      </Container>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "5vh 0vh",
        }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={()=>{checkLogin()}}
        >
          Antri
        </Button>
      </Box>

      <Box sx={{ ml: "3vh", pb: "3vh" }}>
        <Button
          variant="text"
          color="error"
          size="large"
          onClick={() => {
            navigate("/");
          }}
        >
          Kembali
        </Button>
      </Box>

      <Dialog open={isFormOpen} onClose={() => setIsFormOpen(false)}>
        <DialogTitle>Info Reservasi</DialogTitle>
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="timeCont">
              <DatePicker
                label="Tanggal"
                sx={{ marginTop: "3vh" }}
                value={tanggal}
                onChange={(date) => setTanggal(date || dayjs())} //jika value default dihapus semua, maka akan di tambah ulang utk menhindari null. input biasa tdk terpengaruh
                format="DD-MM-YYYY"
                required
              />
              <TimePicker
                label="Waktu"
                sx={{ marginTop: "3vh" }}
                value={waktu}
                onChange={(time) => setWaktu(time || dayjs())}
                required
              />
            </div>
          </LocalizationProvider>

          <TextField
            label="Jumlah Orang"
            type="number"
            fullWidth
            sx={{ marginTop: "3vh" }}
            inputProps={{ min: 1, max: 20 }}
            value={jumlahOrang}
            onChange={(e) => setJumlahOrang(e.target.value)}
            error={jumlahOrangError.length > 0}
            helperText={jumlahOrangError}
            required
          />

          <TextField
            label="Kode Promo"
            fullWidth
            sx={{ marginTop: "3vh" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <LoyaltyIcon />
                </InputAdornment>
              ),
            }}
            value={kodePromo}
            onChange={(e) => setKodePromo(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsFormOpen(false)} color="error">
            Batal
          </Button>
          <Button onClick={handleFormSubmit} color="primary">
            Kirim
          </Button>
        </DialogActions>
      </Dialog>

      {/*       <>
      {isFormValid ? null : (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Jangan isi waktu masa lalu!
        </Alert>
      )}
    </> */}
    </>
  );
};

export default RestoDetails;
