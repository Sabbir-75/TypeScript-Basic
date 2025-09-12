export class newPlayer {
    constructor(
        private id: number,
        public name: string,
        readonly age: number
    ) { }

    play() {
        console.log(this.id, this.name, this.age);
    }
}