const jwt = require("jsonwebtoken");
const User = require("../models/User");


// Middleware to protect routes
// This middleware checks if the user is authenticated by verifying the JWT token


const protect = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (token && token.startsWith("Bearer")) {
      token = token.split(" ")[1];   // Extract token
      const decoded = jwt.verify(token, process.env.JWT_SECRET); 
      req.user = await User.findById(decoded.id).select("-password"); 
      next(); 

    } else {
      res.status(401).json({ message: "Not authorized, no token" });
    }

  } catch (error) {
    res.status(401).json({ message: "Token failed", error: error.message });
  }
};



// Middleware to check if user is admin

const adminOnly = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next(); // Proceed if user is admin
    }   else {
        res.status(403).json({ message: "Access denied, admin only" }); // Deny access if not admin
    }   
}

module.exports = { protect, adminOnly }; // Export middlewares for use in routes

