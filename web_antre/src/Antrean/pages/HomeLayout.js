import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import RestoCard from "../components/RestoCard";
import { Typography, CircularProgress } from "@mui/material";
import SearchResto from "../components/SearchResto";
import Footer from "../components/Footer";
import axios from "axios";

function HomeLayout() {
  const [restos, setRestos] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Fetch data dari mysql
    const fetchRestos = async () => {
      try {
        const response = await axios.get("http://localhost:3031/restoran/");
        setRestos(response.data.restos);
        setLoading(false); // Set loading to false once data is fetched
      } catch (err) {
        console.error("Error fetching data:", err);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchRestos(); //refresh sendiri
  }, []);

  // Filter restaurants by category, e.g., "terdekat"
  const filteredRestaurantsTerdekat = restos.filter(
    (restaurant) => restaurant.kategori === "terdekat"
  );

  // Filter restaurants by category, e.g., "sponsor"
  const filteredRestaurantsSponsor = restos.filter(
    (restaurant) => restaurant.kategori === "sponsor"
  );

  // Filter restaurants by category, e.g., "sponsor"
  const filteredRestaurantsPopuler = restos.filter(
    (restaurant) => restaurant.kategori === "populer"
  );

  if (loading) {
    return (
      // Loading screen
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Carousel />
      <SearchResto unfilteredRestaurants={restos} />
      <Typography
        variant="h4"
        id="terdekat"
        sx={{ fontWeight: "bolder", mt: "5vh", ml: "5vh" }}
      >
        Restoran Terdekat
      </Typography>
      <RestoCard filteredRestaurants={filteredRestaurantsTerdekat} />
      <Typography
        variant="h4"
        id="sponsor"
        sx={{ fontWeight: "bolder", mt: "5vh", ml: "5vh" }}
      >
        Sponsor
      </Typography>
      <RestoCard filteredRestaurants={filteredRestaurantsSponsor} />
      <Typography
        variant="h4"
        id="populer"
        sx={{ fontWeight: "bolder", mt: "5vh", ml: "5vh" }}
      >
        Restoran Populer
      </Typography>
      <RestoCard filteredRestaurants={filteredRestaurantsPopuler} />
      <Footer />
    </>
  );
}

export default HomeLayout;
