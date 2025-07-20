const express = require("express");
const router = express.Router();
const { protect , adminOnly } = require("../middlewares/authMiddleware");
const {
  exportTasksReport,
  exportUsersReport,
} = require("../controllers/reportController");


router.get("/export/tasks", protect, adminOnly, exportTasksReport);  // Export tasks as Excel / PDF
router.get("/export/users", protect, adminOnly, exportUsersReport);  //  Export users-task report

module.exports = router;

