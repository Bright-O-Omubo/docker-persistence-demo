const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
const PORT = 3000;

// Notice the hostname: mongodb
const MONGO_URL =
    process.env.MONGO_URL ||
    "mongodb://admin:password@mongodb:27017";

const client = new MongoClient(MONGO_URL);

let db;

async function connectToMongo() {
    await client.connect();

    db = client.db("devops-demo");

    console.log("Connected to MongoDB");
}

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// Get profile
app.get("/api/profile", async (req, res) => {
    try {
        const profile = await db
            .collection("profile")
            .findOne({});

        res.json(profile || {});
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

// Create or update profile
app.post("/api/profile", async (req, res) => {
    try {
        const { username, age, occupation } = req.body;

        await db.collection("profile").updateOne(
            {},
            {
                $set: {
                    username,
                    age,
                    occupation
                }
            },
            {
                upsert: true
            }
        );

        res.json({
            message: "Profile saved successfully"
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

connectToMongo()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`App running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error);
    });