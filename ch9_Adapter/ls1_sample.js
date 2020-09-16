//ES5
var Lighting = function () {
};
Lighting.prototype.method_L = function () {
    console.log('lighting method')
}

var TypeC = function () {
};
TypeC.prototype.method_TC = function () {
    console.log('type C method')
}

var AdapterLToC = function (lighting) {
    TypeC.apply(this);
    this.lighting = lighting;
}

AdapterLToC.prototype = new TypeC()

var a = new AdapterLToC(new Lighting());
a.method_TC()

//es6

class Adaptee {
    output_220() {
        console.log('220v');
    }
}

class Target {
    input_5v() {
        console.log('5v');
    }
}

class Adapter extends Target {
    constructor(adaptee) {
        super();
        this.adaptee = adaptee;
    }

    input_5v() {
        this.adaptee.output_220();
    }
}

let adaptee = new Adaptee();
let adapter = new Adapter(adaptee);
adapter.input_5v();
