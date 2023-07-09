// let p=fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?unitGroup=us&key=8LZFPHJXLVVCCBCCSKLGXBM3B")

// p.then((value1)=>{
// return value1
// }).then((value2)=>{
//     console.log(value2)
// })

// let options={
//     method:"POST",
//     headers:{"Content-type":"application/json"
//      }
// }

let url="https://kontests.net/api/v1/all"
let response=fetch(url)
response.then((v)=>{
    // console.log(v)
    return v.json()
}).then((contests)=>{
    console.log(contests)
    for(item in contests){
        console.log(item)
    }
})

cardContainer.innerHTML="allcards"