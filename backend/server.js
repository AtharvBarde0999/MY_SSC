const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const MONGO_URI = process.env.MONGO_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("✅ Connected to MongoDB Atlas"))
    .catch((err) => {
        console.error("❌ MongoDB Connection Error:", err);
        process.exit(1);
    });

// Basic route
app.get('/', (req, res) => {
    res.send('MYSSC Backend Running 🚀');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});





// Add these near the top with other requires
const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/api');

// Add these after middleware but before error handling
app.use('/api/auth', authRoutes);
app.use('/api', apiRoutes);



const noteRoutes = require('./routes/noteRoutes');
app.use('/api/notes', noteRoutes);


const courseRoutes = require('./routes/courseRoutes');
app.use('/api/courses', courseRoutes);

