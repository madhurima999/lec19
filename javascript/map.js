let a=[1,2,3]

a.map((value)=>{
    console.log(value)
})

let arr=a.map((value)=>{
    
    return value+1
})
console.log(arr);


let brr=a.filter((value)=>{
    
    return value>1
})
console.log(brr);

let b=[1,2,3,4,5,6,7,8];

let c=b.reduce((h1,h2)=>{
    return h1+h2
})
console.log(c);