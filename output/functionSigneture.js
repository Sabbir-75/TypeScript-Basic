"use strict";
// Function Signeture
let calculation; // make a sturucture and indicate void or number/string,,,
// void---- console.log()
// number/string ---- return......
calculation = (a, b, c) => {
    if (c === "hello") {
        return b - a;
    }
    else {
        return a + b;
    }
};
console.log(calculation(10, 30, "hero"));
let myFunctuin; // make a sturucture and indicate void or number/string,,,
myFunctuin = (id, user) => {
    console.log(id, user);
};
myFunctuin(12, {
    name: "Rakibul",
    age: 23
}); /// function call with console,, function will be call but console output will be undefined because it will not any return value
let myFunctuinSecound; // make a sturucture and indicate void or number/string/object/(number | object)[]/ object,,,
myFunctuinSecound = (id, user) => {
    let store = [id, user];
    return store;
};
console.log(myFunctuinSecound(12, {
    name: "Polash",
    age: 23
}));
//# sourceMappingURL=functionSigneture.js.map