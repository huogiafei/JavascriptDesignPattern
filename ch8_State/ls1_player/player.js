
window.onload = function () {

    const $btn = document.querySelector('#btn');

    $btn.addEventListener('click', () => {
        const audioCtx = new AudioContext();
        const player = new BitPlayer(audioCtx);
        player.init();
        player.setFrequency(300)
        player.play();

       /* player.setFrequency(400)
        player.play()
        player.stop();*/
        /*setTimeout(() => {
            player.stop();
        }, 4000)*/
    });
};


class BitPlayer {
    constructor(context) {
        this.context = context;
        this.initFinish = false;
    }

    init() {
        if (!this.initFinish) {
            this.oscillator = this.context.createOscillator();//波形
            this.gainNode = this.context.createGain(); //音量
            this.oscillator.type = 'square';
            this.oscillator.connect(this.gainNode);
            this.gainNode.connect(this.context.destination);
            this.initFinish = true;

        }
    }

    setFrequency(value){
        this.oscillator.frequency.value = value;
    }

    play() {
        this.init();
        this.gainNode.gain.setValueAtTime(.5, this.context.currentTime);
        this.oscillator.start();
        this.stop();
    }

    stop() {
        //声音淡出
        this.gainNode.gain.exponentialRampToValueAtTime(.001, this.context.currentTime + 1);
        this.oscillator.stop(this.context.currentTime + 1);
    }

    changeTone(){
        this.oscillator.stop(this.context.currentTime);
    }
}

const playerFSM = {
    //播放状态
    play: {
        //按钮改变

    },

    //暂停状态
    pause: {},
};
