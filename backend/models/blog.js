const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    img: {
        type: String,
    },
    author: {
        type: String,
    },
    text: {
        type: String,
    }
})
module.exports = mongoose.model("Blog", blogSchema);