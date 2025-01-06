const express = require("express");
const {
  createNote,
  getNotes,
  deleteNote,
} = require("../controllers/noteController");

const router = express.Router();

router.post("/", createNote);
router.get("/:leadId", getNotes);
router.delete("/:id", deleteNote);

module.exports = router;
