function addTwo(num:number){
  return num+2
}
// addTwo("5")
addTwo(5)




function getUpper(str :string){
  return str.toUpperCase()
}
// getUpper(8)
getUpper("aishu")



function getUser(name:string,email:string,password:boolean){

}

getUser("Aishu","A",false)

// default values 

let  loginUser = (name:string,email:string, isPaid:boolean=false )=>{

}

loginUser("aishu","aishu@gmail.com")

// returning 


const getHello=(s:string):string=>{
  return ''
}

const heros=['thor','spiderman','ironman']
// const heros=[1,2,3]
// const heros=["1",2,3]

heros.map(hero=>{
  return `hero is ${hero}`
})
// should return string
heros.map((hero):string=>{
  return `hero is ${hero}`
  // return 2
})
// hero should be string
heros.map((hero:string)=>{
  return `hero is ${hero}`
})

// not returning anything/void

function consoleError(errmsg:string):void{
  console.log(errmsg);
}
// some functions never return a value
function HandleError(errmsg:string):never{
  throw new Error(errmsg)
}


export{}