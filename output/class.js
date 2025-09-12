"use strict";
// class
class player {
    constructor(i, n, a) {
        this.id = i;
        this.name = n;
        this.age = a;
    }
    play() {
        console.log(this.id, this.name, this.age);
    }
}
const sakib = new player(1, "Sakib", 42);
sakib.play(); // ✅ method call করতে হবে
console.log(sakib);
const mushrafi = new player(2, "mushrafi", 40);
mushrafi.play(); // ✅ method call করতে হবে
console.log(mushrafi);
// we will be using type of player
const players = [];
players.push(sakib, mushrafi);
console.log(players);
//# sourceMappingURL=class.js.map