// overLoading

// class calculator{
//   add(num1:number,num2:number):number
//   add(num1:string,num2:string):string
//   add(num1:any,num2:any):any{
//     if(typeof num1=== "number" && typeof num2==="number"){
//       return num1+num2
//     }else if( typeof num1==="string"&& typeof num2==="string"){
//       return num1+num2
//     }
//   }
// }


// const Add=new calculator()

// Add.add(1,2)
// Add.add("a","pple")

// overriding

class Sound{
  move(){
    console.log("keep moving");
    
  }
}
class Dog extends Sound{
  move(){
    console.log("moving in 4 legss");
    
  }
}

class puppy extends Dog{
  move(){
    console.log("not ready to walk yet");
    
  }
}

const pupp=new puppy()
console.log(pupp.move());//not ready to walk yet

const doggy=new Dog()
console.log(doggy.move());




export{}
