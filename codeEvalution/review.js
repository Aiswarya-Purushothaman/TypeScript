// class Car{
//   name:string
//   constructor(name:string){
//     this.name=name
//   }
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
var Creatures = /** @class */ (function () {
    function Creatures() {
    }
    Creatures.prototype.move = function () {
        console.log("it walks");
    };
    return Creatures;
}());
var Doggy = /** @class */ (function (_super) {
    __extends(Doggy, _super);
    function Doggy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Doggy.prototype.move = function () {
        console.log('it runs');
    };
    return Doggy;
}(Creatures));
var puppy = /** @class */ (function (_super) {
    __extends(puppy, _super);
    function puppy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    puppy.prototype.move = function () {
        console.log("not ready to walk");
    };
    return puppy;
}(Doggy));
var pupp = new puppy();
console.log(pupp.move());
