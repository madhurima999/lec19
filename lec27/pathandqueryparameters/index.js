const express=require("express");
const app=express();

app.use((req,res)=>{
    res.send("this is a response from server");
})






app.listen("3000",(req,res)=>{
    console.log("server running at port 3000");
});