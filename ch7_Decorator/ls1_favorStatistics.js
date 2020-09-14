//收藏功能
function favor() {
    //模拟请求
    console.log('收藏成功');
    return 200
}

Function.prototype.before = function (beforeFn) {
    let _self = this;
    return function () {
        beforeFn.apply(this, arguments);
        return _self.apply(this, arguments);
    }
};

Function.prototype.after = function (afterFn) {
    let _self = this;
    return function () {
        let result = _self.apply(this, arguments);
        afterFn.apply(this, arguments);
        return result;
    }
};

//装饰模式
favor = favor.before(function () {
    console.log('开始计时');
    console.time('favorTime');
});

favor = favor.after(function () {
    console.log('结束计时');
    console.timeEnd('favorTime');
}).after(function(){
    console.log('GA上报数据')
});

console.log(favor());



