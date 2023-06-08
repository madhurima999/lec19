const express =require("express");
const app=express();
const PORT=8000;
const path=require("path"); 

app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname,"public")));

const todos = [

    "Avatar",
    "Avengers",
    "KGF",
    "Shawshank Redemption",
    "John Wick"
]

app.get("/",(req,res)=>{
    let randomNumber=Math.floor(Math.random()*10);
    res.render("index",{randomNumber});
})

app.get("/random",(req,res)=>{

    const randomNumber = Math.floor(Math.random()* 10);

    res.render("random", { favNumber: randomNumber})
})

app.get("/todos",(req,res)=>{

    res.render("todos", {todos})

})

app.listen(PORT,(req,res)=>{
console.log(`listening at ${PORT}`);
})
