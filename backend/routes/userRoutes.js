const express = require("express");
const { adminOnly , protect } = require("../middlewares/authMiddleware");
const router = express.Router();
const { getUsers , getUserById } = require("../controllers/userController");

router.get("/", protect, adminOnly, getUsers);
router.get("/:id", protect,  getUserById);


module.exports = router;