// let a={
//    name2:"harry",
//     language:"java"
// }
// console.log(a)

// let p={
//     run:()=>{
//         alert("run")
//     }
// }
// p.__proto__={
//     name:"ayesha"
// }
//  a.__proto__=p
// a.run()
// console.log(a.name)

class RailwayForm{
    submit(){
        alert('form submitted')
    }
    cancel(){
        alert(this.name + " cancelled")
    }
    // RailwayForm(name){
    //     this.name=name;
    // }
    fill(name){
        this.name=name;
    }
}


let harry= new RailwayForm()
 harry.fill("harry");
let johnn= new RailwayForm();
johnn.fill("johnn");
harry.submit();
johnn.submit();
johnn.cancel()