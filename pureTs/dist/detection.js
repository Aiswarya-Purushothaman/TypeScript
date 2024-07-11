"use strict";
// narrowing
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    else {
        return val + 3;
    }
}
function provideId(id) {
    if (!id) {
        console.log("please provide id");
        return;
    }
    return id.toLowerCase();
}
// typeOf= typeguards
function printAll(str) {
    if (str) {
        if (typeof str === 'object') {
            for (const s of str) {
                console.log(s);
            }
        }
        else if (typeof str === "string") {
            console.log(str);
        }
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
// instanceOf
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.Swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side*shape.side
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultshape = shape;
            return _defaultshape;
    }
}
