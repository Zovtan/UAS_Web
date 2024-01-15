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
    const query = "SELECT * FROM profiles WHERE profile_id = ?;";
    const data = await db.query(query, [id]);
    res.status(200).json({
      message: "get profile success",
      status: res.statusCode,
      profile: data[0],
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "get profile fail",
      statusCode: res.status,
      serverMessage: err,
    });
  }
};

const createProfile = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const query =
      "INSERT INTO profiles (email, username, password) VALUES (?, ?, ?)";
    await db.query(query, [email, username, password]);
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
    const { email, username, password } = req.body;
    const id = req.params.id;
    const query =
      "UPDATE profiles SET email = ?, username = ?, password = ? WHERE profile_id = ?";
    await db.query(query, [email, username, password, id]);
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
    const query = "DELETE FROM profiles WHERE profile_id = ?";
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
