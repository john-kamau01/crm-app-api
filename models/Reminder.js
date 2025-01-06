const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema(
  {
    message: { type: String, required: true },
    due_date: { type: Date, required: true },
    leadId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lead",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reminder", reminderSchema);
