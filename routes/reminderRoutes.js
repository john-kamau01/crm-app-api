const express = require("express");
const {
  createReminder,
  getReminders,
  deleteReminder,
} = require("../controllers/reminderController");

const router = express.Router();

router.post("/", createReminder);
router.get("/:leadId", getReminders);
router.delete("/:id", deleteReminder);

module.exports = router;
