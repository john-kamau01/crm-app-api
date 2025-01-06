const Note = require("../models/Note");

exports.createNote = async (req, res) => {
  try {
    const note = new Note(req.body);
    await note.save();
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getNotes = async (req, res) => {
  const { leadId } = req.params;
  try {
    const notes = await Note.find({ leadId });
    res.status(200).json(notes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteNote = async (res, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.status(200).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
