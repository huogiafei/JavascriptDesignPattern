/**
 * 方案1：Blur Up 图片加载模糊渐入效果
 * 背景：产品使用七牛云图片服务
 * 实现：先加载比原图小N倍的图片，使用css或者图片服务
 * 商自带的图片模糊，等原图加载好再切换回去
 * 参考：https://css-tricks.com/the-blur-up-technique-for-loading-background-images/
 */

//imageMogr2/thumbnail/100x100/blur/3x3
const TEST_IMG = 'https://img.huogiafei.cn/50cents/1.jpg';
const TEST_IMG2 = 'https://img.huogiafei.cn/50cents/2.jpg';
const TEST_IMG3 = 'https://img.huogiafei.cn/50cents/3.jpg';

//es5
var createImageDom = (function () {
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);

    return {
        setSrc: function (src) {
            imgNode.src = src;
        }
    }
})();

var proxyImg = (function () {
    var suffix = '?imageMogr2/thumbnail/100x100/blur/3x3';
    var img = new Image;
    img.onload = function () {
        setTimeout(function () {
            createImageDom.setSrc(img.src)
        }, 2000);//模拟两秒后加载好
    };
    return {
        setSrc: function (src) {
            var thumbnail = src + suffix;
            createImageDom.setSrc(thumbnail);
            img.src = src;
        }
    }
})();

//es6
class createImage {
    constructor() {
        this.imgNode = new Image();
        //等效document.createElement('img');
    }

    setSrc(src) {
        this.imgNode.src = src
    }

    render() {
        document.body.appendChild(this.imgNode);
    }
}

class proxyCreateImage extends createImage {
    constructor() {
        super();
        this.rawSrc = null;
        this.tempImg = new Image();
    }

    setSrc(src) {
        const suffix = '?imageMogr2/thumbnail/100x100/blur/3x3';
        const thumbnail = src + suffix;
        super.setSrc(thumbnail);
        this.rawSrc = src;
    }

    render() {
        this.tempImg.onload = () => {
            setTimeout(() => {
                this.imgNode.src = this.rawSrc;
            }, 2000);//模拟两秒后加载好
        };
        this.tempImg.src = this.rawSrc;
        document.body.appendChild(this.imgNode)
    }
}

class proxyCreateImageSkeleton extends createImage {
    constructor() {
        super();
        this.rawSrc = null;
        this.tempImg = new Image();
    }

    setSrc(src) {
        this.rawSrc = src;
        this.imgNode.style.backgroundColor = '#eee';
        this.imgNode.style.transition = 'all 0.2s';
    }

    render() {
        this.tempImg.onload = () => {
            setTimeout(() => {
                this.imgNode.src = this.rawSrc;
            }, 2000);//模拟两秒后加载好
        };
        this.tempImg.src = this.rawSrc;
        document.body.appendChild(this.imgNode)
    }
}

window.onload = function () {
    let image1 = proxyImg.setSrc(TEST_IMG);

    let image2 = new proxyCreateImage();
    image2.setSrc(TEST_IMG2);
    image2.render();

    let image3 = new proxyCreateImageSkeleton();
    image3.setSrc(TEST_IMG3);
    image3.render();
};




