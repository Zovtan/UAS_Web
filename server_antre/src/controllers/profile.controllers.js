const db = require("../database/database.connection");
const jwt = require('jsonwebtoken');

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

const loginProfile = async (req, res) => {
  try {
    const { email, password } = req.body;
    const query = "SELECT * FROM profiles WHERE email = ? AND password = ?";
    const data = await db.query(query, [email, password]);

    if (data[0].length>0 && data[0][0]) {
      const profileId = data[0][0].profile_id; //mengambil profile_id
      const token = jwt.sign(
        {
          email: email,
          profileId: profileId,
        },
        "lalilulelo",
        { expiresIn: "3 days" }
      );
      res.status(200).json({
        message: "Login berhasil",
        id: profileId,
        token: token,
      });
    } else {
      res.status(400).json({
        message: "salah email/password",
        statusCode: res.status,
      });
    }

  } catch (err) {
    res.status(400).json({
      message: "login profiles fail",
      statusCode: res.status,
      serverMessage: err,
    });
  }
};

const registerProfile = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const existingEmail = await db.query("SELECT * FROM profiles WHERE email = ?", [email]);

    if (existingEmail[0].length > 0) {
      // email udh ada
      return res.status(409).json({
        message: "Email sudah terpakai",
        status: res.statusCode,
      });
    }

    // Lanjut kalo unik
    const query = "INSERT INTO profiles (email, username, password) VALUES (?, ?, ?)";
    await db.query(query, [email, username, password]);
    
    res.status(201).json({
      message: "create profiles success",
      status: res.statusCode,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      message: "create profiles fail",
      status: res.statusCode,
      serverMessage: err,
    });
  }
}

module.exports = {
  readProfile,
  readProfiles,
  createProfile,
  updateProfile,
  deleteProfile,
  loginProfile,
  registerProfile,
};
