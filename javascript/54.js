let promise=new Promise(function(resolve,reject){
    alert("hi there")
    //resolve("okay")
    reject("bye")
}) 

console.log("hello")
setTimeout(function(){
    console.log("ok")
},2000)
console.log("kon")

console.log(promise)