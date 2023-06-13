const express = require('express')
const app = express()
const port = 3000
const session= require('express-session');

const sessionConfig={
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
   
}


app.use(session(sessionConfig))

app.get('/', (req, res)=>{
res.send("home route");
})

app.get('/setuser', (req,res)=>{
    const {username}=req.query;
    req.session.username= username;
res.send("send data ");
})

app.get('/salutation', (req,res)=>{
    const {username}=req.session;
    console.log(req.session);
    res.send(`hello, good ${username}`);
})


app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))