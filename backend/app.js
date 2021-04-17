const express = require("express");
const app = express();
const mongoose = require("mongoose");

const routeBlog = require("./routes/blog");
const seedDB = require("./seedDb");

//database connection
mongoose.connect("mongodb://localhost:27017/blog-app-MERN",{
    useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false
}).then(()=>{
    console.log("Database Connected");
}).catch(err => {
    console.log(err);
    console.log("Database Connection Failed");
})

app.use(express.json());
//seedDB();

app.use(routeBlog);

app.listen(8000,(req,res)=>{
    console.log("server running at 8000 port");
})