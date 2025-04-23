const { MongoClient } = require('mongodb');

// Replace <db_password> with your actual password
const uri = "mongodb+srv://atharvbarde999:<db_password>@myssccluster.wj6tp9y.mongodb.net/?retryWrites=true&w=majority&appName=MYSSCcluster";

const client = new MongoClient(uri);

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas");
        return client.db(); // Returns the database instance
    } catch (error) {
        console.error("Connection error:", error);
        process.exit(1);
    }
}

module.exports = connectToDatabase;