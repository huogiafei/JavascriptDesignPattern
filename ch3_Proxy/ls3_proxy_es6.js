//十个女仔，九个认细
class Girl {
    constructor(name, weight, age) {
        this.name = name;
        this.weight = weight;
        this.age = age;
    }

    sayAge() {
        return (`${this.age - 3}`);
    }
}

const susie = new Girl('Susie', 100, 30);

const proxySusie = new Proxy(susie, {
    get(target, key) {
        switch (key) {
            case 'age':
                return '保密！';
            case 'weight':
                return target[key] - 20
        }
    },

    set(target, key, value) {
    }
});

console.log('Susie age: ' + proxySusie.age);
console.log('Susie weight: ' + proxySusie.weight);
console.log('Susie say her age By herself: ' + susie.sayAge());
