const db = require("../database/database.connection");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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

const updateProfile = async (req, res) => {
  try {
    const { email, noHp, username, password, confirmPassword } = req.body;
    const id = req.params.id;

    if (password !== confirmPassword) {
      return res.status(403).json({ message: "Passwords do not match" });
    }

    //cek email yg sudah ada kecuali email yg sedang edit
    const existingEmail = await db.query(
      "SELECT * FROM profiles WHERE email = LOWER(?) AND profile_id != ?",
      [email.trim(), id]
    );
    
    if (existingEmail && existingEmail[0].length > 0) {
      // email udh ada
      return res.status(402).json({
        message: "Email already exist",
        status: res.statusCode,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const query =
      "UPDATE profiles SET email = LOWER(?), noHp = ?, username = ?, password = ? WHERE profile_id = ?";
    await db.query(query, [email.trim(), noHp, username, hashedPassword, id]);
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



const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const [data] = await db.execute(
      "SELECT * FROM profiles WHERE email = LOWER(?)",
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
    const lowercaseEmail = email.toLowerCase(); // Convert email to lowercase

    // Cek kalo email null / tdk
    if (!lowercaseEmail || !username || !password) {
      return res.status(401).json({
        message: "Please fill the data completely",
        status: res.statusCode,
      });
    }

    const existingEmail = await db.query(
      "SELECT * FROM profiles WHERE email = LOWER(?)",
      [email.trim()]
    );

    if (existingEmail && existingEmail[0].length > 0) {
      // email udh ada
      return res.status(402).json({
        message: "Email already exist",
        status: res.statusCode,
      });
    }
    //lanjut jika unik

    if (password !== confirmPassword) {
      return res.status(403).json({ message: "Passwords do not match" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await db.execute(
      "INSERT INTO profiles ( email, noHp, username, password) VALUES (?, ?, ?, ?)",
      [lowercaseEmail.trim(), noHp || null, username, hashedPassword]
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
  updateProfile,
  deleteProfile,
  login,
  register,
};
