// server.js
const express = require('express');
const cors = require("cors")

const app = express();
const allowedOrigins = ["http://localhost:5173", "https://portfolio-mlsk.vercel.app/"];

app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true); // allow Postman or curl
    if(allowedOrigins.includes(origin)){
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  }
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log("Connection error: ", err));



// Define Schema
const blogSchema = new mongoose.Schema({
  newTitle: {
    type: String,
    required: true
  },
  newContent: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  }
});


const Blog = mongoose.model('Blog', blogSchema);

// Routes
app.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find({});
    console.log(blogs)
    res.send(blogs)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.patch('/blogs/like/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    // Increment the likes of the blog post
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true } // This option returns the modified document rather than the original
    );

    res.json(updatedBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.post('/blogs', async (req, res) => {
 console.log("BLOG BODY 👉", req.body);
  const blog = new Blog({
    newTitle: req.body.newTitle,
    newContent: req.body.newContent,
    date: req.body.date,
    likes: req.body.likes
  });

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
