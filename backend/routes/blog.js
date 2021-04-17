const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");

//to show front page of blog , this page having all data
router.get("/blogs", async(req,res) => {
    const blog = await Blog.find({});
    res.send(blog);
}) 

//to show particular data 
router.get("/blogs/:id",async (req,res) => {
    const blog = await Blog.findById(req.params.id);
    res.send(blog);
})

// Add new Blogs
router.post("/blogs", async(req,res) => {
    const blog = await Blog.create(req.body);
    res.send(blog);
})

// edit the particular post
// router.get("blogs/:id/edit", async(req,res)=> {
//     const blog = await Blog.findById(req.params.id);
//     res.send(blog);
// })
// router.patch("/blogs/:id", async (req,res) => {
//     const blog = await Blog.findByIdAndUpdate(req.params.id, req.body);
//     res.send(blog);
// })
router.get('/blogs/:id/edit', async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    res.send(blog);
})

router.patch('/blogs/:id', async (req, res) => {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body);
    res.send(blog);
})
router.delete("/blogs/:id", async (req,res) => {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    res.send(blog);
})
module.exports = router;