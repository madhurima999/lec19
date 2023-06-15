// let user=prompt("Enter S, W or G");
// let cpuI=Math.floor((Math.random()*3));
// let cpu=["s","w", "g"][cpuI];
// console.log(cpu)
// const match=(cpu,user)=>{
// if(cpu==user)
// return "nobody"
// else if(cpu==="s" && user==="w"){
// return "cpu"
// }
// else if(cpu==="w" && user==="s"){
//     return "user"
//     }
// else if(cpu==="g" && user=="w"){
//     return "user"
// }
// else if(cpu==="w" && user=="g"){
//     return "cpu"
// }
// }
// let result=match(cpu,user);
// document.write(`${result}`)

let a=
["Is!it!true!that!cannibals!don't!eat!clowns!because!they!taste!funny?" ,

" What!kind!of!pig!can!you!ignore!at!a!party? A!wild!bore." ,

" What!kind!of!murderer!has!fiber? A!cereal!killer." ,

" A!man!walking!down!the!streets!sees!another!man!withr" ,

" Q:!What's!the!difference!between!a!shoping!trolley!and!a!University!vice!chancellor" ,

" Q.!How!do!you!catch!a!polar!bear?" ,

" Why!do!Marxists!like!fruit!infusions?Because!all!proper!tea!is!theft!" ,

" What!was!born!to!succeed?A!budgie!with!a!blunt!beak." ,

"Three!budgies!in!a!cage,!one!on!the!top!perch,!one!on!the!middle!and!one!on!the!bottom!perch.!!Which!Budgie!owns!the!cage?The!one!on!the!bottom!perch,!the!other!two!are!on!higher!perches." ,

" what!do!you!call!a!fly!with!no!wings?a!walk." ]
let n=Math.floor(Math.random()*(a.length));
console.log(a[n]);