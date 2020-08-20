//es5
var Singleton = function (name) {
    this.name = name;
};

Singleton.instance = null;

Singleton.getInstance = function (name) {
    if (!this.instance) {
        this.instance = new Singleton(name)
    }
    return this.instance;
};

var a = Singleton.getInstance('a');
var b = Singleton.getInstance('b');

console.log(a === b);
