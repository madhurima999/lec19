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


let p1=new Promise((resolve,reject)=>{
    console.log("promise is pending")
    setTimeout(()=>{
        console.log("I am a promise and i am fulfilled")
      resolve(true)
     
    },5000)
  
})

let p2=new Promise((resolve,reject)=>{
    console.log("promise is pending")
    setTimeout(()=>{
        console.log("I am a promise and i am fulfilled")
       // resolve(true)
       reject(new Error("i am error"))
    },5000)
  
})
//this takes resolve value
p1.then((value)=>{
    console.log(value);
})
//this takes reject value
p2.catch((error)=>{
    console.log(error)
})

p2.then((value)=>{
    console.log("kk")
},(error)=>{
console.log(error)
})

// console.log(p1,p2)