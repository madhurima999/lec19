const express = require("express");
const app = express();
const PORT = 8000;
const path = require("path")


app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


const todos = [

    "Avatar",
    "Avengers",
    "KGF",
    "Shawshank Redemption",
    "John Wick"
]

// get request to view my template

app.get("/",(req,res)=>{

    res.render("index");

})
app.get("/random",(req,res)=>{

    const randomNumber = Math.floor(Math.random()*10);

    res.render("random", { favNumber: randomNumber})
})

app.get("/todos",(req,res)=>{

    res.render("todos", {todos})

})
app.get("/userdetail", (req,res)=>{

    console.log(req.query)

    res.send("get request completed");

})
app.get("/blog",(req,res)=>{
    res.render("blog");
})
app.listen(PORT, (req,res)=>{

    console.log(`server is running at port ${PORT}`)

})