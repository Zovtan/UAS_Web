const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 3031;

const profileRoutes = require("./routes/profile.route");
const restoRoutes = require("./routes/resto.route");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/profile", profileRoutes);
app.use("/restoran", restoRoutes);

app.listen(PORT, () => {
  console.log("server berjalan di port", PORT, "...");
});
