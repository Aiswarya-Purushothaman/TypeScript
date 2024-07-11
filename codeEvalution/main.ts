

interface fruits{
  color:string
}

// type animal={
// voice:string
// }
// reopened
interface fruits{
  taste:string
}

let apple:fruits={
  color:' ',
  taste:' ' 
}

//  cant reopen type// 
// type animal={
// age:number
// }
// let cat:animal={
//   voice:'',
//   // age:3  wont work
// }



let num2:undefined|number

num2=2


let christy:any
christy=""

let sadhiq:unknown
sadhiq="hey"
// ..................................................................................................................

class Employee{
  employeName:string;
  constructor(name:string){
    this.employeName=name
  }

  greet(){ 
    console.log(`Good Morning ${this.employeName}`) 
  }
}
let emp1=new Employee('vishwas')
console.log(emp1.employeName);
emp1.greet()


class Manager extends Employee{
  constructor(managerName:string){
    super(managerName)
  }
delegateWork(){
  console.log(`Manager Deligating Tasks`);
  
}

}
let m1=new Manager('Chris') 
m1.delegateWork();
m1.greet()
console.log(m1.employeName);
 


