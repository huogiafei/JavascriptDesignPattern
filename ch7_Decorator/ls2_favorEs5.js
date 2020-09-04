//es5的实现方式 Object.defineProperty
let favor = function(){
    //模拟请求
    console.log('收藏成功');
    return 200
};

Object.defineProperty(favor,'before',{
   writable:true,
   value:function (fn) {
        return fn.apply(this,arguments);
   }
});

Object.defineProperty(favor,'after',{
    writable:true,
    value:function (fn) {
        return fn.apply(this,arguments);
    }
});

let favorBefore = function(){
    console.log('开始计时');
    console.time('favorTime');
};

let favorAfter = function(){
    console.log('结束计时');
    console.timeEnd('favorTime');
    console.log('GA上报数据')
};

let favorAop = function(fn,beforeFn,afterFn){
    return function(){
        fn.before(beforeFn);
        fn();
        fn.after(afterFn);
    }
};

favor = favorAop(favor,favorBefore,favorAfter);
favor();



