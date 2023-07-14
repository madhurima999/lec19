// let a=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(44)
//     },2000)
// })  

function play()
{
    var audio=new Audio('Tu-Hai-To-Mujhe-Phir-Aur-Kya-Chahiye(PaglaSongs).mp3');
    audio.play();
}
setInterval(()=>{
    let d=new Date()
    // document.write(d.getTime())
time.innerHTML=d.toDateString()+" "+d.toTimeString()
},100)
// setTimeout(()=>{
//     play()
// },2000);
