// let p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("resolved after 2 sec")
//         resolve(56)
//     },2000)
// })

// p1.then((value)=>{
//     console.log(value)
//    let p2=new Promise((resolve,reject)=>{
//   resolve("Promise 2")
//    })
//    return p2;
// }).then((value)=>{
// console.log(value);//this gives p2 resolve value
// let p3=new Promise((resolve,reject)=>{
//     reject(new Error("Promise 3"))
//      })
//      return p3;
// }).then((value)=>{
//     console.log(value)
// },(error)=>{
//     console.log(error)
// })


const loadScript=(src)=>{
    return new Promise((resolve,reject)=>{
        let script=document.createElement("script")
        script.type="text/javascript"
        script.src=src
        document.body.appendChild(script)
        script.onload=()=>{
            resolve("script loaded")
        }
        script.oneerror=()=>{
            reject(0)
        }
    })
}

let p1=loadScript('http://127.0.0.1:5500/javascript/56.html')
p1.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
})