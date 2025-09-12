// const userInfo = (
//     id: number | string,
//     user: { name: string, address: number | string }
// ) => {
//     console.log(id, user);
// }
// userInfo(12, { name: "sadik", address: 1280 })

// const userDetails = (
//     user: { name: string, address: number | string }
// ) => {
//     console.log(user);
// }

// userInfo(12, { name: "malek", address: 12000 })


// // Now, Using By Aliases type 

// type stringAndnumber = string | number
// type userType = { name: string, address: number | string }

// const userInfoByAlias = (
//     id: stringAndnumber,
//     user: userType
// ) => {
//     console.log(id, user);
// }
// userInfoByAlias(1000, { name: "Masum", address: `Kushtia-${15}` })