// const os= require("os");
// const user=os.userInfo();
// console.log(user);
// console.log(os.cpus());
// console.log(os.totalmem());
const path=require("path");
// const filePath = path.join("/main","content","abc.txt");
//console.log(filePath);
// console.log(path.sep);

const filePath=  path.join(__dirname,"main.js");

console.log(filePath);

const f= path.resolve("main","content","abc.txt");
console.log(f);