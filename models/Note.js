const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    leadId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lead",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", noteSchema);
