const fs=require('fs');
//creating new file
fs.writeFileSync('read.txt',"welcome");

fs.writeFileSync('read.txt',"thijbdciujbdsi");
//how to add in file
fs.appendFileSync('read.txt',"  bdajskbadujidb");


const data=fs.readFileSync("read.txt");
console.log(data);
const t=data.toString();
console.log(t);