const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO = process.env.MONGO_URL;

mongoose.connect(MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("✅ Connected to MongoDB Atlas"))
    .catch((err) => console.error("❌ MongoDB Error:", err));

app.get('/', (req, res) => {
    res.send('MYSSC Backend Running 🚀');
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
