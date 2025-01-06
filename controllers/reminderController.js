const Reminder = require("../models/Reminder");

exports.createReminder = async (req, res) => {
  try {
    const reminder = new Reminder(req.body);
    await reminder.save();
    res.status(200).json(reminder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getReminders = async (req, res) => {
  const { leadId } = req.params;
  try {
    const reminders = await Reminder.find({ leadId });
    res.status(200).json(reminders);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteReminder = async (req, res) => {
  try {
    await Reminder.findByIdAndDelete(req.params.id);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
