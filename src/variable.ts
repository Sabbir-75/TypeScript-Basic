// and value no declear without type no declear and with type declear and value no declear

// let newName1 = "karim"
// newName1 = 12
// console.log(newName1);

let newName2 : string | number = "karim"
newName2 = 12
console.log(newName2);

let newName3 : string | number;
newName3 = "Karim"
console.log(newName3);

let newName4: string;
newName4 = "Ripon Vhai"
newName4 = "Karim"
console.log(newName4);

// Any type but it will only be used when a person cannot predict the value of type.
let a:any ;
a= 12;
a="mojnu"
console.log(a);