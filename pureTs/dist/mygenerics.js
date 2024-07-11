"use strict";
const score = [];
const names = [];
// confusing
function identityOne(val) {
    return val;
}
// no
function identityTwo(val) {
    return val;
}
// takes one type assign(logged one type) type to val return same type
function identityThree(val) {
    return val;
}
// or// same same
function identityFour(val) {
    return val;
}
// identityFour<Bootle>({})
function getSearchProducts(products) {
    // do some db operations
    const myIndex = 3;
    return products[myIndex];
}
// , coma points  generic 
const getMoreSearchProducts = (products) => {
    // do some db operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addTocart(product) {
        this.cart.push(product);
    }
}
