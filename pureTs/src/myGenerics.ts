const score:Array<number>=[]
const names:Array<string>=[]

// confusing
function identityOne(val:boolean|number):boolean|number{
  return val
}
// no
function identityTwo(val:any):any{
  return val
}
// takes one type assign(logged one type) type to val return same type

function identityThree<Type>(val:Type):Type{
  return val
}
// or// same same

function identityFour<T>(val:T):T{
  return val
}
// .........................................
interface Bootle{
brand:string,
type:number
}

// identityFour<Bootle>({})


function getSearchProducts<T>(products:T[]):T{
  // do some db operations
  const myIndex=3
  return products[myIndex]
}

// , coma points  generic 
const getMoreSearchProducts=<T,> (products:T[]) : T=>{
   // do some db operations
   const myIndex=4
   return products[myIndex]
}

interface Database{
  connection:string,
  username:string,
  password:string
}


function anotherFunction<T,U extends Database>(valOne:T,valTwo:U):object{
  return {
    valOne,
    valTwo
  }
}

// anotherFunction(3,{})

// class generic

interface Quiz{
  name:string,
  type:string
}

interface Course{
  name:string,
  author:string,
  subject:string
}

class Sellable<T>{
  public cart:T[]=[]

  addTocart(product:T){
    this.cart.push(product)
  }
}


// ..........................................................



function Add <T>(num:T):T{
  return num
}
