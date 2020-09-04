class Favor{
    @favorBefore
    add(){
        //模拟请求
        console.log('收藏成功');
        return 200
    }
}

function favorBefore(target,key){
    console.log(key, 'test')
}
