const db = require("../database/database.connection");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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
    const { email, noHp, username, password } = req.body;
    const id = req.params.id;
    const query =
      "UPDATE profiles SET email = ?, noHp = ?, username = ?, password = ? WHERE profile_id = ?";
    await db.query(query, [email, noHp, username, password, id]);
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

    if (data[0].length > 0 && data[0][0]) {
      //cek apakah data salah ata tidak ada
      const profileId = data[0][0].profile_id; //mengambil profile_id
      const username = data[0][0].username;
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
        username: username,
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
    const existingEmail = await db.query(
      "SELECT * FROM profiles WHERE email = ?",
      [email]
    );

    if (existingEmail[0].length > 0) {
      // email udh ada
      return res.status(409).json({
        message: "Email sudah terpakai",
        status: res.statusCode,
      });
    }

    // Lanjut kalo unik
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
      status: res.statusCode,
      serverMessage: err,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const [data] = await db.execute(
      "SELECT * FROM profiles WHERE LOWER(email) = LOWER(?)",
      [email.trim()] //buat jd huruf kecil , //hapus spasi
    );

    if (data.length === 0) {
      return res.status(404).json({ message: "Email not found" });
    }

    const user = data[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Password doesnt match" });
    }

    const token = jwt.sign(
      { id: user.profile_id, email: user.email },
      "lalilulelo",
      {
        expiresIn: "5h",
      }
    );

    res
      .status(200)
      .json({ token, id: user.profile_id, username: user.username });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "internal Server Error" });
  }
};

const register = async (req, res) => {
  try {
    const { email, noHp, username, password, confirmPassword } = req.body;

    // Cek kalo email null / tdk
    if (!email || !username || !password) {
      return res.status(400).json({
        message: "Please fill the data completely",
        status: res.statusCode,
      });
    }

    const existingEmail = await db.query(
      "SELECT * FROM profiles WHERE LOWER(email) = LOWER(?)",
      [email.trim()]
    );

    if (existingEmail && existingEmail[0].length > 0) {
      // email udh ada
      return res.status(409).json({
        message: "Email already exist",
        status: res.statusCode,
      });
    }
    //lanjut jika unik

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await db.execute(
      "INSERT INTO profiles ( email, noHp, username, password) VALUES (?, ?, ?, ?)",
      [email, noHp || null, username, hashedPassword]
    );
    res.status(201).json({
      message: "User registered successfully",
      userId: result.insertId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = {
  readProfile,
  readProfiles,
  createProfile,
  updateProfile,
  deleteProfile,
  loginProfile,
  registerProfile,
  login,
  register,
};
