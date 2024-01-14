const db = require("../database/database.connection");

const readProfiles = async (req, res) => {
  try {
    const query = "SELECT * FROM profiles;";
    const data = await db.query(query);
    res.status(200).json({
      message: "get all profiles success",
      status: res.statusCode,
      profiles: data[0],
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "get all profiles fail",
      statusCode: res.status,
      serverMessage: err,
    });
  }
};

const readProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const query = "SELECT * FROM profiles WHERE id = ?;";
    const data = await db.query(query, [id]);
    res.status(200).json({
      message: "get profiles success",
      status: res.statusCode,
      profile: data[0],
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "get profiles fail",
      statusCode: res.status,
      serverMessage: err,
    });
  }
};

const createProfile = async (req, res) => {
  try {
    const { title, dsc, dev, reviews, tags, img } = req.body;
    const query =
      "INSERT INTO profiles (title, dsc, dev, reviews, tags, img) VALUES (?, ?, ?, ?, ?, ?)";
    await db.query(query, [title, dsc, dev, reviews, tags, img]);
    res.status(201).json({
      message: "create profiles success",
      status: res.statusCode,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      message: "create profiles fail",
      statusCode: res.status,
      serverMessage: err,
    });
  }
};



const updateProfile = async (req, res) => {
  try {
    const { title, dsc, dev, reviews, tags, img } = req.body;
    const id = req.params.id;
    const query =
      "UPDATE profiles SET title = ?, dsc = ?, dev = ?, reviews = ?, tags = ?, img = ? WHERE id =?";
    await db.query(query, [title, dsc, dev, reviews, tags, img, id]);
    res.status(200).json({
      message: "updated profiles success",
      status: res.statusCode,
    });
  } catch (err) {
    res.status(400).json({
      message: "updated profiles fail",
      statusCode: res.status,
      serverMessage: err,
    });
  }
};
const deleteProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const query = "DELETE FROM profiles WHERE id=?";
    await db.query(query, [id]);
    res.status(200).json({
      message: "delete profile success",
      status: res.statusCode,
    });
  } catch (err) {
    res.status(400).json({
      message: "delete profiles fail",
      statusCode: res.status,
      serverMessage: err,
    });
  }
};

module.exports = {
  readProfile,
  readProfiles,
  createProfile,
  updateProfile,
  deleteProfile,
};
