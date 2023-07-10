let a=[
    "Initializing Hcak tool",
    "connecting to facebook",
    "connecting ot server1",
    "connection failed Rettring",
    "connectiong to server2",
    " username mg",
    "trying brute force",
    "200k passwords tried",
    "MAtch not found",
    " another 200k passwords tried",
    "MAtch not found",
    " another 200k passwords tried",
    "MAtch  found",
    "accsessing account",
    "hack successful"

]
const sleep=async(seconds)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
resolve(true)
        },seconds*1000)
    })
}
const showHack=async(messages)=>{
await sleep(2)
console.log(messages)
text.innerHTML=text.innerHTML+messages+ "<br>"
}

(async()=>{
for(let i=0;i<a.length;i++){
    await showHack(a[i]);
}
})()