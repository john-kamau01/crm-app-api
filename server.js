const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/leads", require("./routes/leadRoutes"));
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/notes", require("./routes/noteRoutes"));
app.use("/api/reminders", require("./routes/reminderRoutes"));

const PORT = process.env || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
