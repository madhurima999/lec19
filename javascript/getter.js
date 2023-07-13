class Animal{
    constructor(name){
        this._name=name
    }
    fly(){
        alert("ko")
    }
    get name(){
        return this._name
    }
    set name(newName){
        this._name=newName
    }
}
let a= new Animal("b")
a.fly();
console.log(a.name)
a.name="kon"
console.log(a.name)