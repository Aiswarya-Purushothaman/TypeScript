let num:string|number=22

num=45
num='wd'
// ................................................

type User={
  name:string
  id:number
}

type admin={
  username:string
  id:number
}

let aishu:User|admin={name:"aishu",id:334}

aishu = {username:"aishhhh",id:2}

// ..........................................................
// function getdbId(id:number|string){
//   // API calls
// console.log(`DB id is ${id}`);

// }

getdbId(4)
getdbId("8546")

function getdbId(id:number|string){
// id.tolowerCase()
if(typeof id==="string"){
  id.toLowerCase()
}

}


// array union

const data:number[]=[1,2,3]
const data1:string[]=["1","2","3"]
const data3:(string|number|boolean)[]=['1',1,true]

//  it will alwayss the same
let pi:3.14 = 3.14  

let seatAllot:"aisle"|'middle'|'window'

seatAllot='aisle'
// seatAllot='crew' throws error

export{}