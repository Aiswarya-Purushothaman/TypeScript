"use strict";
// console.log("hey  its typeScript here");
// console.log(" typeScript here");
//  class User{
//    public email:string
//   //  can access from outside of class
//   private name:string
//     // only accesible in the class-private 
//   readonly city:string='kerala'
//   constructor(email:string,name:string){
//     this.email=email;
//     this.name=name
//   }
//  }
//  same same but different syntax
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = 'kerala';
    }
    //  private  methods
    deleteToken() {
        console.log("Token deleted");
    }
    //  getter
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // setter doesnt need a returning type
    set courseCount(coursenum) {
        if (coursenum <= 1) {
            throw new Error('course count should be more than 1');
        }
        else {
            this._courseCount = coursenum;
        }
    }
}
const aishu = new User("h@h.com", "aishu");
//  aishu.city=palakkaad    // cant edit readonly property
// aishu.name // private
// aishu.deleteToken() // private property
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
