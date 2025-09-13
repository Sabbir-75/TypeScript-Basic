// class

class player {
    id: number;
    name: string;
    age: number;

    constructor(i: number, n: string, a: number) {
        this.id = i
        this.name = n
        this.age = a
    }

    play() {
        console.log(this.id, this.name, this.age);
    }
}

const sakib = new player(1, "Sakib", 42)
sakib.play();   // ✅ method call করতে হবে
console.log(sakib);

const mushrafi = new player(2, "mushrafi", 40)
mushrafi.play();   // ✅ method call করতে হবে
mushrafi.age = 52
console.log(mushrafi);





// we will be using type of player
const players: player[] = []
players.push(sakib, mushrafi)
console.log(players);