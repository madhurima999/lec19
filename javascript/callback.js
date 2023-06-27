
// const prompt=require("prompt-sync")({sigint:true});
// let a= prompt("what is your name");
// console.log(a) 

//asynchronous
setTimeout(function(){
    console.log("hey")
},5000)


function loadScript(src, callback){
    var script=document.createElement("script");
    script.src=src;
    let r="i";
    script.onload=function(){
        console.log("loaded")
       callback(src);
    }
    document.body.appendChild(script);
}
function hello(src){
    alert("hello"+src)
}
function goodmorning(){
    console.log("goodmorning")
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",hello)