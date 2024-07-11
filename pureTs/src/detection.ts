// narrowing

function detectType(val:number|string){
  if(typeof val==="string"){
return val.toLowerCase()
  }else{
   return val+3
  }
}

function provideId(id:string | null){
  if(!id ){
    console.log("please provide id");
    return
  }
 return id.toLowerCase()
}


// typeOf= typeguards


function printAll(str: string|string[]|null){
  if(str){
    if(typeof str==='object'){
      for(const s of str){
        console.log(s);
      }
    }else if(typeof str==="string"){
      console.log(str);
    }
  }
}

// empty strings is truthy they at least prevents us from dreaded errors when we run our code



// in operator

interface User{
  name:string,
  email:string
}

interface Admin{
  name:string,
  email:string,
  isAdmin:boolean
}

function isAdminAccount(account:User|Admin){
  if("isAdmin" in account){
    return account.isAdmin
  }

}

// instanceOf


function logValue(x:Date|string){
  if(x instanceof Date){
    console.log(x.toUTCString());   
  }else{
    console.log(x.toUpperCase());
    
  }
}



// ..................................................................
type Fish={
  Swim:()=>void
}
type Bird={
  Fly:()=>void
}

function isFish(pet:Fish|Bird):pet is Fish{
  return (pet as Fish).Swim !==undefined
 
}

function getFood(pet:Fish | Bird){
  if(isFish (pet)){
pet
return "fish food"
  }else{
    pet
    return "bird food"
  }
}
// discriminated unions

interface Circle{
  kind:"circle",
  radius:number
}

interface Square{
  kind:"square",
  side:number
}

interface Rectangle{
  kind:"rectangle",
  length:number,
  width:number
}

type Shape=Circle | Square | Rectangle

function getTrueShape(shape:Shape){
  if(shape.kind==='circle'){
    return Math.PI*shape.radius**2
  }
  // return shape.side*shape.side
}

 
function  getArea(shape:Shape){
  switch(shape.kind){
    case "circle":
      return Math.PI*shape.radius**2

    case "square":
      return shape.side*shape.side
    
    case "rectangle":
    return shape.length*shape.width

    default:
      const _defaultshape:never=shape
      return _defaultshape

  }
}