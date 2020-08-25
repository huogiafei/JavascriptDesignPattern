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

const a = Singleton.getInstance('a');
const b = Singleton.getInstance('b');

console.log(a === b);

//ES6 的import
//通过import引入的是采用的单例模式，多次引入同一个模块时，只会引入一次该模块的实例
