"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Aishu",
    email: "aishu@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: 'hitesh', isPaid: false, email: "h@.com" };
createUser(newUser);
// functionname -function parameter-return type-definition
function createCourse() {
    return { name: "aishu", price: 899 };
}
// accepts type of user and returns type of user
function createNewUser(user) {
    return { name: ' ', email: " ", isActive: true };
}
createNewUser({ name: ' ', email: " ", isActive: true });
var myUser = {
    _id: '12345',
    name: 'aishu',
    email: "h@h.com",
    isActive: false,
};
myUser.email = 'new@gmail.com';
myUser._id = "1112233";
