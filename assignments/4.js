"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPassed(num) {
    if (num > 50) {
        return "passed";
    }
    else {
        return " Failed";
    }
}
console.log(isPassed(30));
