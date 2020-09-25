/***
 * 泡面步骤（只提取其中的几个重要流程）
 * 1. boilWater 煮开水
 * 2. addIngredient 放配料 (也不排除不放)
 * 3. addWater 加开水 （这个总得要了吧>_<）
 * 4. waitMoment 等几分钟
 */

//ES5

var InstantNoodle = function (param) {
    var boilWater = function () {
        console.log('煮开水')
    };

    var addIngredient = param.addIngredient;

    var addWater = param.addWater || function () {
        throw new Error('must be overwrite function "addWater"')
    };

    var waitMoment = param.waitMoment || function () {
        throw new Error('must be overwrite function "waitMoment"')
    };

    var Fun = function () {
    }

    Fun.prototype.init = function () {
        boilWater();
        addIngredient ? addIngredient() : '';
        addWater();
        waitMoment();
    };

    return Fun;
};

var CupNoodle = InstantNoodle({
    //不用单独放配料
    addWater: function () {
        console.log('加入300ml开水')
    },
    waitMoment: function () {
        console.log('等3分钟')
    }
});

var SeaFoodCupNoodle = new CupNoodle();
SeaFoodCupNoodle.init();

/**
 *  方便面（炒面、捞面类）
 * 1. boilWater 煮开水
 * 2. addIngredient 放配料
 * 3. addWater 加开水
 * 4. waitMoment 等几分钟
 * 5. pourWater 倒水
 * 6. addSauce 加酱料
 */

//ES6

class FiredNoodle {
    boilWater() {
        console.log('煮开水')
    }

    addIngredient() {
    }

    addWater() {
    }

    waitMoment() {
    }

    pourWater() {
        console.log('倒掉热水')
    }

    addSauce() {
    }

    make() {
        this.boilWater();
        this.addIngredient();
        this.addWater();
        this.pourWater();
        this.addSauce();
    }
}

class UfoFiredNoodle extends FiredNoodle {
    addIngredient() {
        console.log('加入蔬菜包')
    }

    addWater() {
        console.log('加入热水至注水线')
    }

    waitMoment() {
        console.log('等待4分钟')
    }

    addSauce() {
        console.log('加入酱料包拌匀')
    }
}

let XoSeafoodUfo = new UfoFiredNoodle();
XoSeafoodUfo.make();



