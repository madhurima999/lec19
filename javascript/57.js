let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(1);
    },2000)
})

p1.then((value)=>{
    console.log(value)
})

p1.then(()=>{
    alert("hurray")
})