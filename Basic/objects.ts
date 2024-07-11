const User={
  name:"Aishu",
  email:"aishu@gmail.com",
  isActive:true
}

function createUser({name:string,isPaid:boolean}){

}

let newUser={name:'hitesh',isPaid:false,email:"h@.com"}

createUser(newUser)

// functionname -function parameter-return type-definition

function createCourse():{name:string,price:number}{
return {name:"aishu",price:899}
}

// creating a type

type User={
  name:string,
  email:string,
  isActive:boolean
}
// accepts type of user and returns type of user

function createNewUser(user:User):User{
return {name:' ', email:" " ,isActive:true}
}

createNewUser({name:' ', email:" " ,isActive:true})
 
// ....................................................................................
type  newUser={
  readonly _id:string    
  name:string
  email:string
  isActive:boolean
  creditCardDetails?:number
// ? if is there then ok ,or else no problem
}

let myUser:newUser={
  _id:'12345',
  name:'aishu',
  email:"h@h.com",
  isActive:false,


}

myUser.email='new@gmail.com'
// myUser._id="1112233" 
// read only cannot change


type cardNumber={
  cardNumber:string
}
type cardDate={
  cardDate:string
}
//  a type with existing types

type cardDetails=cardNumber & cardDate & {
  cvv:number
}


export{}