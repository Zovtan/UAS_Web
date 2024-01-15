const jwt = require("jsonwebtoken");
const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(400).json({
      message: "unauthorized",
    });
  }

  jwt.verify(token, "secret key", (err, user) => {
    if (err) {
      return res.status(400).json({
        message: "access denied",
      });
    }
    next();
  });
};

module.exports = authenticateToken;
