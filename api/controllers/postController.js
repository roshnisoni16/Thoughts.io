const Post = require('../models/Post');

// controllers/postController.js

exports.createPost = async (req, res) => {
    const { title, content, category } = req.body;

    if (!title || !content || !category) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {
        // Assuming you have a Post model
        const result = await Post.create(title, content, category);
        res.status(201).json({ message: "Post created successfully." });
    } catch (error) {
        res.status(500).json({ message: "Server error." });
        console.error(error);
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.json(posts);
    } catch (error) {
        res.status(500).send('Server error');
    }
};
