
// Function Signeture

let calculation: (x: number, y: number, z: string) => number // make a sturucture and indicate void or number/string,,,

// void---- console.log()
// number/string ---- return......

calculation = (a: number, b: number, c: string) => {
    if (c === "hello") {
        return b - a
    }
    else {
        return a + b
    }
}

console.log(calculation(10, 30, "hero"));

let myFunctuin: (id: number, y: {
    name: string,
    age: number
}) => void   // make a sturucture and indicate void or number/string,,,

myFunctuin = (id: number, user: {
    name: string,
    age: number,
}) => {
    console.log(id, user);
}

myFunctuin(12, {
    name: "Rakibul",
    age: 23
});    /// function call with console,, function will be call but console output will be undefined because it will not any return value



let myFunctuinSecound: (id: number, y: {
    name: string,
    age: number
}) => (number | object)[]  // make a sturucture and indicate void or number/string/object/(number | object)[]/ object,,,

myFunctuinSecound = (id: number, user: {
    name: string,
    age: number,
}) => {
    let store = [id,user]
    return store
}

console.log(myFunctuinSecound(12, {
    name: "Polash",
    age: 23
}));


