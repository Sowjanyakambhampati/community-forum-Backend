// const roleValidation = (roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       return res.status(403).json({ message: "Forbidden" });
//     }
//     next();
//   };
// };

// module.exports = roleValidation;

const jwt = require('jsonwebtoken');
const roleValidation = (roles) => {
  return (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Failed to authenticate token" });
      }
      req.user = decoded;
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: "Forbidden" });
      }
      next();
    });
  };
}

module.exports = roleValidation;
