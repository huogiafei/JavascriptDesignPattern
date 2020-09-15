import frequency from './assets/frequency.js';
import marioBook from './assets/marioBgm.js';

window.onload = function () {
    const $btn = document.querySelector('#btn');

    $btn.addEventListener('click', () => {
        const audioCtx = new AudioContext();
        const player = new BitPlayer(audioCtx);
        player.init();
        player.play();
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
            console.log(this.oscillator)
        }
    }

    play() {
        this.init();
        this.gainNode.gain.setValueAtTime(.5, this.context.currentTime);
        this.playMelody(marioBook);
    }

    playMelody(book) {
        const {speed, score} = book;
        const ctx = this.context;
        const gn = this.gainNode;
        let prevTime = 0;
        score.forEach(item => {
            let start = ctx.currentTime + prevTime;
            const time = 60 / speed * item[1];
            const clickTime = 60/speed * .5;

            const tones = item[0].split('/');
            tones.forEach(tone=>{
                let osc = ctx.createOscillator();
                osc.connect(gn);
                osc.connect(ctx.destination);

                osc.frequency.value = frequency[tone];
                gn.gain.setValueAtTime(0, start);
                gn.gain.linearRampToValueAtTime(.5, start + clickTime * .05);
                gn.gain.setValueAtTime(.5, start + clickTime * 0.1);
                gn.gain.linearRampToValueAtTime(0, start + clickTime * 0.5);

                osc.start(ctx.currentTime + prevTime);
                osc.stop(ctx.currentTime + clickTime + prevTime);
            })
            prevTime += time;
        })
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
