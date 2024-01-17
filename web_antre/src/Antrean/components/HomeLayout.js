import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import RestoCard from "./RestoCard";
import { Typography } from "@mui/material";
import SearchResto from "./SearchResto";
import Footer from "./Footer";
import axios from "axios";

function HomeLayout() {
  const [restos, setRestos] = useState([]);

  useEffect(() => {
    // Fetch data dari mysql
    const fetchRestos = async () => {
      try {
        const response = await axios.get("http://localhost:3031/restoran/"); 
        setRestos(response.data.restos);
      } catch (err) {
        console.error("Error fetching data:", err);
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
