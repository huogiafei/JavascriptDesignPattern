//演员
class Actor {
    constructor(name) {
        this.name = name;
        this.id = name[0];
    }

    say(str) {
        console.log(`${this.name}: ${str}`)
    }
}

//导演
class Director {
    constructor(name) {
        this.name = name
    }

    action(list) {
        console.log('Action!');
        list.forEach(item => {
            item.execute();
        });
    }

    cut() {
        console.log('Cut!')
    }
}

//拍摄
class Shooting {
    shoot() {
        console.log('拍摄中........');
    }

    stop() {
        console.log('........停止拍摄');
    }
}

let ActorCmd = function (actors, lines) {
    return {
        execute: () => {
            for (let [actorId, line] of lines.values()) {
                for (let actor of actors) {
                    if (actor.id === actorId) {
                        actor.say(line);
                        break;
                    }
                }
            }
        }
    }
};

let ShootingStartCmd = function (shooting) {
    return {
        execute: () => {
            shooting.shoot();
        }
    }
};

let ShootingStopCmd = function (shooting) {
    return {
        execute: () => {
            shooting.stop();
        }
    }
};

let CutCmd = function (director) {
    return {
        execute: () => {
            director.cut();
        }
    }
};

//对白
const lines = new Map([
    [1, ['h', '都几熟手喔']],
    [2, ['w', '我都入过学堂']],
    [3, ['h', '你滴卧底真系得意，拣亲都系天台']],
    [4, ['w', '我唔似得你，我见得光']],
    [5, ['w', '我要嘅嘢呢']],
    [6, ['h', '我要嘅嘢你都未必带来喇']],
    [7, ['w', '咁，即系点啊,上嚟晒下太阳咁啊']],
    [8, ['h', '比个机会我']],
    [9, ['w', '点比机会你']],
    [10, ['h', '我以前冇得拣，我宜家想拣返做好人']],
    [11, ['w', '好啊，同法官讲喇，睇下佢比唔比你做好人']],
    [12, ['h', '咁即是要我死啊']],
    [13, ['w', '对唔住啊，我系差人']],
    [14, ['h', '边个知啊']]
]);

//人员
const director_mai = new Director('Mai');
const actor_hua = new Actor('hua');
const actor_wei = new Actor('wei');
const shooting = new Shooting();

//命令
let actorCmd = ActorCmd([actor_hua, actor_wei], lines);
let shootingStartCmd = ShootingStartCmd(shooting);
let shootingStopCmd = ShootingStopCmd(shooting);
let cutCmd = CutCmd(director_mai);


let actionList = [
    shootingStartCmd,
    actorCmd,
    cutCmd,
    shootingStopCmd,
];

//Action！
director_mai.action(actionList);




