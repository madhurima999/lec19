// setTimeout(()=>{
//     console.log("ss")
// },1000)

// try{
    
//     console.log(rahul)
// }catch(error){
//     console.log(error)
// }

// setTimeout(()=>{
//     console.log("ok")
// },2000)

const loadScript=async(src)=>{
    return new Promise((resolve,reject)=>{
        let script=document.createElement("script")
        script.src=src
        script.onload=()=>{
            resolve(src)
        }
        document.head.append(script)
    })

}
const main1=async()=>{
    let a= await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js")
    console.log(a)
}

main1() 
