const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Route imports
const authRoutes = require('./routes/auth');
const noteRoutes = require('./routes/notes');
const courseRoutes = require('./routes/courses');
const quizRoutes = require('./routes/quiz'); // fixed 'requires' typo

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5013; // fallback port if .env is missing

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("✅ MongoDB Connected");
}).catch((err) => {
    console.error("❌ MongoDB Error:", err);
});

// Route usage
app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/quiz', quizRoutes);

// Default route
app.get("/", (req, res) => {
    res.send("MYSSC Backend Running 🚀");
});

// Server listener
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});