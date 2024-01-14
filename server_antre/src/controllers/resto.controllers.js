const db = require("../database/database.connection");

const readRestos = async (req, res) => {
  try {
    const query = "SELECT * FROM restos;";
    const data = await db.query(query);
    res.status(200).json({
      message: "get all restos success",
      status: res.statusCode,
      restos: data[0],
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "get all restos fail",
      statusCode: res.status,
      serverMessage: err,
    });
  }
};

const readResto = async (req, res) => {
  try {
    const id = req.params.id;
    const query = "SELECT * FROM restos WHERE id = ?;";
    const data = await db.query(query, [id]);
    res.status(200).json({
      message: "get restos success",
      status: res.statusCode,
      resto: data[0],
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "get restos fail",
      statusCode: res.status,
      serverMessage: err,
    });
  }
};




module.exports = {
  readResto,
  readRestos,
};
