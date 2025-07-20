const express = require("express");
const router = express.Router();
const { registerUser , loginUser , getUserProfile , updateUserProfile} = require("../controllers/authcontroller");
const { protect } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");

// Auth Routes

router.post("/register", registerUser);                 // Register a new user
router.post("/login", loginUser);                       // Login an existing user
router.get("/profile", protect, getUserProfile);        // Get user profile
router.put("/profile", protect, updateUserProfile);     // Update user profile

//  In userProfile and updateUserProfile, we need to protect the route so that only authenticated users can access it.
//  We will use a middleware function called 'protect' to check if the user is authenticated.
//  This middleware will check if the user has a valid JWT token in the request headers.


router.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

  res.status(200).json({ imageUrl });
});




module.exports = router;