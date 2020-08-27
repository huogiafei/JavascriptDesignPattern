/*  Not Good */
//退出登录后执行的动作
/* logout(()=>{
    clearUserInfo('');//清空用户头像姓名
    resetShoppingCart();
    updateNotify('');//某天增加的消息模块
}); */

class Subject {
    list = new Map();

    addObserver(key, fn) {
        this.list.set(key, fn);
    }

    removeObserver(key) {
    }

    notify() {
    }
}

//到货通知
class ArrivalNotice {
    list = new Map();

    addSubUser(userId, productId, fn) {
        this.list.set(`${userId}-${productId}`, fn)
    }

    removeSubUser(key) {
        console.log(key)
        console.log(this.list.delete(key));
    }

    notify(productId) {
        for (let [key, fn] of this.list) {
            if (key.split('-')[1] === productId) {
                fn.apply(this, arguments);
            }
        }
    }

    getUsers() {
        return this.list;
    }
}

//订阅用户
class SubUser {
    constructor(userId, name, productId) {
        this.userId = userId;
        this.name = name;
        this.productId = productId;
    }

    getMessageByPhone(receivePhone) {
        console.log(`发送短信到${receivePhone}`);
        console.log(`用户${this.name}您好，你预订的商品${this.productId}已到货,退订请回复TD`);
    }

    getMessageByEmail() {
        console.log(`用户${this.name}您好，你预订的商品${this.productId}已到货,点击链接直接购买https://z.cn/product/238213`);
    }
}

const arrivalNoticeClient = new ArrivalNotice();
const user1 = new SubUser('u01', 'Jacky', 'p01');
const user2 = new SubUser('u02', 'NaNa', 'p02');
const user3 = new SubUser('u03', 'Ken', 'p01');

arrivalNoticeClient.addSubUser(user1.userId, user1.productId, () => user1.getMessageByPhone(13145269281));
arrivalNoticeClient.addSubUser(user2.userId, user2.productId, () => user2.getMessageByEmail());
arrivalNoticeClient.addSubUser(user3.userId, user3.productId, () => user3.getMessageByPhone(82178321));

arrivalNoticeClient.removeSubUser(`${user3.userId}-${user3.productId}`);
console.log(arrivalNoticeClient.getUsers());


arrivalNoticeClient.notify('p01');
arrivalNoticeClient.notify('p02');

