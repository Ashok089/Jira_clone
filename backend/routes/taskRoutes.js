const express = require("express");
const router = express.Router();
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  updateTaskStatus,
  updateTaskChecklist,
  getDashboardData,
  getUserDashboardData
} = require("../controllers/taskController");



//  All Task Management Routes

router.get("/dashboard-data", protect, getDashboardData);
router.get("/user-dashboard-data", protect, getUserDashboardData);
router.get("/", protect, getTasks);      //  Get all tasks
router.get("/:id", protect, getTaskById);   //  Get task by ID
router.post("/", protect, adminOnly , createTask);  // Create a new task  -> admin only
router.put("/:id", protect, updateTask);  // Update a task
router.delete("/:id", protect,adminOnly, deleteTask);  // Delete a task -> admin only
router.get("/:id/status", protect, updateTaskStatus);  // Update task status
router.get("/:id/todo", protect, updateTaskChecklist);  // Update task checklist


module.exports = router;