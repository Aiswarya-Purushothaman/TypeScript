"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
// addTwo("5")
addTwo(5);
function getUpper(str) {
    return str.toUpperCase();
}
// getUpper(8)
getUpper("aishu");
function getUser(name, email, password) {
}
getUser("Aishu", "A", false);
// default values 
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("aishu", "aishu@gmail.com");
