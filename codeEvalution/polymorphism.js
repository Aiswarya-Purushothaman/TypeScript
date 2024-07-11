"use strict";
// overLoading
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
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
var Sound = /** @class */ (function () {
    function Sound() {
    }
    Sound.prototype.move = function () {
        console.log("keep moving");
    };
    return Sound;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.move = function () {
        console.log("moving in 4 legss");
    };
    return Dog;
}(Sound));
var puppy = /** @class */ (function (_super) {
    __extends(puppy, _super);
    function puppy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    puppy.prototype.move = function () {
        console.log("not ready to walk yet");
    };
    return puppy;
}(Dog));
var pupp = new puppy();
console.log(pupp.move()); //not ready to walk yet
var doggy = new Dog();
console.log(doggy.move());
