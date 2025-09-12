// accessmodifire in class because when we will not change/console some key of value
// public - There will be console and change. 
// private - There will not console and with no change. 
// readonly - There will be console but no change. 
import { newPlayer } from "./classes/player.js";
// by default all property stay public
// class newPlayer {
//     // private id: number;
//     // public name: string;
//     // readonly age: number;
//     constructor(
//         private id: number,
//         public name: string,
//         readonly age: number
//         // i: number, n: string, a: number
//     ) {
//         // this.id = i
//         // this.name = n
//         // this.age = a
//     }
//     play() {
//         console.log(this.id, this.name, this.age);
//     }
// }
// const taskin = new newPlayer(3, "taskin", 35)
// taskin.id = 12                   // public - There will be console and change. 
// console.log(taskin.id);
// taskin.age = 44                  // readonly - There will be console but no change. 
// console.log(taskin.age);
// taskin.name = "mahmudullah"      // public - There will be console and change.
// console.log(taskin.name);
// console.log(taskin);
// taskin.play()
// fresh code 
const taskin = new newPlayer(3, "taskin", 35);
taskin.id = 12; // public - There will be console and change. 
console.log(taskin.id);
taskin.age = 44; // readonly - There will be console but no change. 
console.log(taskin.age);
taskin.name = "Bashar"; // public - There will be console and change..
console.log(taskin.name);
console.log(taskin);
taskin.play();
//# sourceMappingURL=accessmodifire.js.map