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
},1000)

const setAlarm=(seconds)=>{
    today=new Date()
    setTimeout(()=>{
        play()
    },seconds*1000)
    setInterval(()=>{
        alarm.innerHTML="alarm rining in"+ "seconds"
    })
}

// setTimeout(()=>{
//     play()
// },2000);

let s=prompt("after how many minutes do u want an alarm");
setAlarm(parseInt(s))