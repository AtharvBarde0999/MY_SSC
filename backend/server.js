const mongoose = require('mongoose');
const express = require('express');
const app = express();

// MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://atharvbarde999:mayank1234@myssccluster2.svftcck.mongodb.net/?retryWrites=true&w=majority&appName=MYSSCcluster2';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('✅ MongoDB Connected');
    })
    .catch((error) => {
        console.error('❌ MongoDB Error:', error);
    });

// Basic route to confirm server is running
app.get('/', (req, res) => {
    res.send('MYSSC Backend Running 🚀');
});

// Define the port your server will listen on
const PORT = process.env.PORT || 5013;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
