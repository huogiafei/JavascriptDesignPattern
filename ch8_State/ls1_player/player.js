import frequency from './assets/frequency.js';
import marioBook from './assets/marioBgm.js';

window.onload = function () {
    const firstInit = false;
    let btnStatus = 'stop';
    const $btn = document.querySelector('#btn');
    let playerFSM;
    $btn.addEventListener('click', () => {
        //TODO
        if (!firstInit) {
            const audioCtx = new AudioContext();
            const player = new BitPlayer(audioCtx);
            playerFSM = {
                //播放状态
                play: function () {
                    player.init();
                    player.play();
                    $btn.innerHTML = 'stop';

                },

                //停止状态
                stop: function () {
                    $btn.innerHTML = 'play';
                    player.stop()
                },
            };
        }

        if (btnStatus === 'stop') {
            playerFSM.play();
            btnStatus = 'play'
        } else {
            btnStatus = 'stop';
            playerFSM.stop();
        }
    });
};


class BitPlayer {
    constructor(context) {
        this.context = context;
        this.initFinish = false;
    }

    oscList = [];

    init() {
        if (!this.initFinish) {
            this.gainNode = this.context.createGain(); //音量
            this.gainNode.connect(this.context.destination);
            this.initFinish = true;
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
            const clickTime = 60 / speed * .5;

            const tones = item[0].split('/');
            tones.forEach(tone => {
                let osc = ctx.createOscillator();
                osc.connect(gn);
                osc.connect(ctx.destination);

                osc.frequency.value = frequency[tone];
                gn.gain.setValueAtTime(0, start);
                gn.gain.linearRampToValueAtTime(.5, start + clickTime * .05);
                gn.gain.setValueAtTime(.5, start + clickTime * 0.1);
                gn.gain.linearRampToValueAtTime(0, start + clickTime * 0.5);

                this.oscList.push(osc);

                osc.start(ctx.currentTime + prevTime);
                osc.stop(ctx.currentTime + clickTime + prevTime);
            });
            prevTime += time;
        })
    }

    stop() {
        this.oscList.forEach(osc => {
            osc.stop(0);
        })
    }
}


