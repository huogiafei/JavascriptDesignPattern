/* es5 */

//version1
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

//不能通过new来创建实例
var a = Singleton.getInstance('a');
var b = Singleton.getInstance('b');

console.log(a === b);


//version2
//解决getInstance调用不直接的问题
var uniqueRandomInt = (function () {
        var _instance = null;

        function init() {
            return Math.round(Math.random() * 10);
        }

        return function () {
            if (!_instance) {
                _instance = init();
            }
            return _instance
        }
    }
)();

var randomNum = uniqueRandomInt();
var randomNum2 = uniqueRandomInt();
var randomNum3 = uniqueRandomInt();
console.log(randomNum, randomNum2, randomNum3);

//version3
//其实版本1和2都违反"单一职责原则"，同时负责了创建对象和init()两件事
var CreatTitle = function (title) {
    this.title = title;
};

//使用代理
const ProxySingleCreate = (function () {
    let instance;
    return function (title) {
        if (!instance) {
            instance = new CreatTitle(title);
        }
        return instance
    }
}());

const t1 = new ProxySingleCreate('proxy');
const t2 = new ProxySingleCreate('mode');
console.log(t1 === t2,t2);





