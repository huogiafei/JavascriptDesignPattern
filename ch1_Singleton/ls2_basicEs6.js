class Singleton {
    constructor(name) {
        this.name = name;
    }
    static #instance = null;

    static getInstance(name) {
        if (this.#instance == null) {
            this.#instance = new Singleton(name)
        }
        return this.#instance;
    }
}

let a = Singleton.getInstance('a');
let b = Singleton.getInstance('b');
let c = new Singleton('c');

console.log(a === b);
