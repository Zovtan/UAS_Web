import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import RestoCard from "./RestoCard";
import { Typography } from "@mui/material";
import SearchResto from "./SearchResto";
import Footer from "./Footer";
import restaurants from "../data/Restaurants";

/* import axios from "axios";
const BASE_URL = "http://localhost:3031/games"; */

function HomeLayout() {
  /*   const [restos, setRestos] = useState([]);
  const fetchRestos = async () => {
    try {
      const response = await axios.get(BASE_URL);
      if (response.data.status === 200) {
        setRestos(response.data.restos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  // Filter restaurants by category, e.g., "dekat"
  const filteredRestaurantsTerdekat = fetchRestos.filter(
    (restos) => restos.kategori === "terdekat" //restos disini bukan dari useState, tapi dari table mySQL
  );

  // Filter restaurants by category, e.g., "sponsor"
  const filteredRestaurantsSponsor = restaurants.filter(
    (restos) => restos.kategori === "sponsor"
  );

  // Filter restaurants by category, e.g., "sponsor"
  const filteredRestaurantsPopuler = restaurants.filter(
    (restos) => restos.kategori === "populer"
  );
 */

  // Filter restaurants by category, e.g., "dekat"
  const filteredRestaurantsTerdekat = restaurants.filter(
    (restaurant) => restaurant.kategori === "terdekat"
  );

  // Filter restaurants by category, e.g., "sponsor"
  const filteredRestaurantsSponsor = restaurants.filter(
    (restaurant) => restaurant.kategori === "sponsor"
  );

  // Filter restaurants by category, e.g., "sponsor"
  const filteredRestaurantsPopuler = restaurants.filter(
    (restaurant) => restaurant.kategori === "populer"
  );

  return (
    <>
      <Navbar />
      <Carousel />
      <SearchResto unfilteredRestaurants={restaurants} />
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
