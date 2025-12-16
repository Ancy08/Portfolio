const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// GET all blogs
router.get('/', async (req, res) => {
    const blogs = await Blog.find({});
    res.json(blogs);
});

// PATCH like
router.patch('/like/:id', async (req, res) => {
    const updatedBlog = await Blog.findByIdAndUpdate(
        req.params.id,
        { $inc: { likes: 1 } },
        { new: true }
    );
    res.json(updatedBlog);
});

// POST new blog
router.post('/', async (req, res) => {
    const blog = new Blog(req.body);
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
});

module.exports = router;
