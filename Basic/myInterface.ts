interface User{
  readonly dbid:number,
  email:string,
  userId:number,
  googleId?:string,
  // adding functions
  // startTrail:()=> string   or
  startTrail():string
  // compulsory parameters
  getCoupon(couponname:string ,value:number):number

}
// adding properties or reopening of interface
interface User{
  githubToken:string
}

const aishu:User={
  dbid:22,email:"h@.com",userId:3213,
  githubToken:"",
  startTrail:()=>{
    return "2"
  },
  getCoupon:(name:"aishu12",num:9)=>{
    return 10
  }
}

// inheriting

interface Admin extends User{
  // adding new extras
  role:"admin"|"ta"|"learner"
}

const christy:Admin={
  role:"admin",
  dbid:22,email:"h@.com",userId:3213,
  githubToken:"",
  startTrail:()=>{
    return "2"
  },
  getCoupon:(name:"aishu12",num:9)=>{
    return 10
  }
}




aishu.email='aishu@gmail.com'


export{}