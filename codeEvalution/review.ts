// class Car{
//   name:string
//   constructor(name:string){
//     this.name=name
//   }

//   color(){
//     console.log("its a white selection");
    
//   }
// }

// class ford extends Car{

// move(){
//   console.log("its have brilliant motion management");
  
// }

// }

// const newford=new ford(" ")



// function sum <T>(val:T):T{
//   return val
// }

// function add(num:(number|string)){

// }

class Creatures{
  move(){
    console.log("it walks");
    
  }
}

class Doggy extends Creatures{
  move(){
    console.log('it runs');
    
  }
}
class puppy extends Doggy{
  move(){
    console.log("not ready to walk");
    
  }
}

const pupp=new puppy()
console.log(pupp.move());
 

// function Sum(arrry:number[...arr:[]]):{

// }

const Sum=((num:number):number=>{
  return 6
})

export{

}