// let newArray = [1, 2, 3, 4, 5, 6]
// console.log(newArray);

// let secound = [1,2,3,4,5,6,7]
//  secound = [1,2,3]
//  secound.push(12,13,14,15)
// console.log(secound);

// let third : number[] = [1,2,3,4,5,6,7]
//  third = [1,2]
//  third.unshift(12)
// console.log(third);

// let four : (string | number)[] = [1,2,3,4] // must be indicate by parenthesis() then array symble[]
//  four = [1,2,100]
//  four.unshift(12,"Ripon")
// console.log(four);

// let extra : any[] = [];
// extra.push(12, "kabir")
// console.log(extra);

// let five : (string | number | object)[] = [1,2,3,4] 
//  five = [1,2,100]
//  five.unshift(12,"Ripon",{
//     name:"moslem",
//     age: 20
//  })
// console.log(five);




// // let six = []; // it will be things type of all
// let six: (number | string | object)[];  //it meanse indicate type


// six = [1, 2, "hello", 100, 7777, {}]
// six.unshift(12, "Ripon", {
//     name: "moslem",
//     age: 20
// })
// console.log(six);





// const seven : (string | number)[] = [1,2,3,4,5,6,7]
// seven[4] = 'kawser';
// console.log(seven);

// let eight : ((string | number)[] | number) = [1,2,3,4,5,6,7]  // it meanse array or simple value
// eight = 12
// // eight[4] = 'kawser';
// console.log(eight);

// let nine: any = {}
// nine = {
//     familly_member: "four",
//     roll: 12
// }
// nine.name = 'riyad'
// nine.age = 12
// nine.agee = true

// console.log(nine);


// same but new way ,,it meanse type declear will be first for each key of object By Aliases process

// type Person = {
//     familly_member?: string;
//     roll?: number;
//     name?: string; // if add new key and value
//     age?: number;  // if add new key and value
//     phones?: number;  // if add new key and value
//     // [key: string]: any;  // ✅ যেকোনো নতুন property add করা যাবে
   
// };

// let ten: Person;
// ten = {
//     familly_member: "four",
//     roll: 12
// };

// ten.name = "riyad";
// ten.age = 12;
// ten.phones = 4;

// // ten.dress = 'unique';
//  (ten as any).dress = "unique";

// console.log(ten);

// // way 2 means make structure of object

// let eleven: {
//     familly_member?: string;
//     roll?: number;
//     name?: string; // if add new key and value
//     age?: number;  // if add new key and value
//     phones?: (number | string)[];  // if add new key and value
//     // [key: string]: any;  // ✅ যেকোনো নতুন property add করা যাবে
   
// };;
// eleven = {
//     familly_member: "four",
//     roll: 12
// };

// eleven.name = "riyad";
// eleven.age = 12;
// eleven.phones = [1,2,3];

// // eleven.dress = 'unique';
//  (eleven as any).dress = "unique";

// console.log(eleven)
