const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose');

const blogRoutes = require("../routes/blogs");

const app = express()
app.use(cors({
  origin: 'https://portfolio-mlsk.vercel.app', // your frontend URL
  methods: ['GET', 'POST', 'PATCH']
}))
// middleware
app.use(express.json())
// MongoDB Connection
async function connectedDB() {
    try {
        await mongoose.connect("mongodb+srv://maria35699_db_user:maria35699@cluster0.ggbqkiz.mongodb.net/blogDB?appName=Cluster0")
        console.log("MongoDB atlas connected successfully")
    }
    catch (error) {
        console.log("MongoDB Connection failed")
        console.log(error.message)
    }
}
connectedDB();
// test route
app.get("/", (req, res) => {
    res.send("Backend is running");
});

// Mount blog routes
app.use('/api/blogs', blogRoutes);

module.exports = app;