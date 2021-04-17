const mongoose = require("mongoose");
const blog = require("./models/blog");

const arr = [
    {
        title : "First Blog",
        img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        author: "Ashish",
        text: "This is my first blog i hope you like it!!!"
    },
    {
        title : "First Blog",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        author: "Ashish",
        text: "This is my first blog i hope you like it!!!"
    },
    {
        title : "First Blog",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        author: "Ashish",
        text: "This is my first blog i hope you like it!!!"
    },
    {
        title : "First Blog",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        author: "Ashish",
        text: "This is my first blog i hope you like it!!!"
    },
    {
        title : "First Blog",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        author: "Ashish",
        text: "This is my first blog i hope you like it!!!"
    }
]
async function seedDB() {
    await blog.insertMany(arr);
    console.log("DB Seeded!!");
}
module.exports = seedDB;