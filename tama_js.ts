//get from HTML----
const start = document.getElementById(`start`) as HTMLDivElement | null;
const select_tama = document.getElementById(`select_tama`) as HTMLDivElement | null;
const hp_bar = document.getElementById('hp-fill') as HTMLDivElement | null;
const hunger_bar = document.getElementById('hunger-fill') as HTMLDivElement | null;
const fun_bar = document.getElementById('fun-fill') as HTMLDivElement | null;
const lvl_bar = document.getElementById('lvl-fill') as HTMLDivElement | null;
const end_wrapper = document.getElementById('end') as HTMLDivElement | null;
const play_area = document.getElementById('play_area') as HTMLDivElement | null;
const lvl_display = document.getElementById('tama_lvl') as HTMLDivElement | null;
const btn_feed = document.getElementById('btn_feed') as HTMLDivElement | null;
const btn_play = document.getElementById('btn_play') as HTMLDivElement | null;
const holes = document.querySelectorAll('.hole') as NodeListOf<HTMLElement>;
const scoreBoard = document.getElementById('score') as HTMLSpanElement;
const game_start = document.getElementById('game_start') as HTMLDivElement | null;

//vars
interface Tama_emoji {
    name: string;
    emoji: string;
}
const Tamas: Tama_emoji[] = [
    { name: 'ant', emoji: '🐜' },
    { name: 'badger', emoji: '🦡' },
    { name: 'bat', emoji: '🦇' },
    { name: 'bear', emoji: '🐻' },
    { name: 'bird', emoji: '🐦' },
    { name: 'blowfish', emoji: '🐡' },
    { name: 'boar', emoji: '🐗' },
    { name: 'buffalo', emoji: '🐃' },
    { name: 'bug', emoji: '🐛' },
    { name: 'butterfly', emoji: '🦋' },
    { name: 'camel', emoji: '🐪' },
    { name: 'cat', emoji: '🐱' },
    { name: 'chicken', emoji: '🐔' },
    { name: 'chipmunk', emoji: '🐿' },
    { name: 'cow', emoji: '🐄' },
    { name: 'cow face', emoji: '🐮' },
    { name: 'crocodile', emoji: '🐊' },
    { name: 'deer', emoji: '🦌' },
    { name: 'dog', emoji: '🐕' },
    { name: 'dolphin', emoji: '🐬' },
    { name: 'dove', emoji: '🕊' },
    { name: 'dragon', emoji: '🐉' },
    { name: 'duck', emoji: '🦆' },
    { name: 'eagle', emoji: '🦅' },
    { name: 'elephant', emoji: '🐘' },
    { name: 'ewe', emoji: '🐑' },
    { name: 'fish', emoji: '🐟' },
    { name: 'flamingo', emoji: '🦩' },
    { name: 'fox', emoji: '🦊' },
    { name: 'frog', emoji: '🐸' },
    { name: 'giraffe', emoji: '🦒' },
    { name: 'goat', emoji: '🐐' },
    { name: 'gorilla', emoji: '🦍' },
    { name: 'hamster face', emoji: '🐹' },
    { name: 'hedgehog', emoji: '🦔' },
    { name: 'hippopotamus', emoji: '🦛' },
    { name: 'honeybee', emoji: '🐝' },
    { name: 'horse', emoji: '🐎' },
    { name: 'kangaroo', emoji: '🦘' },
    { name: 'koala', emoji: '🐨' },
    { name: 'lady beetle', emoji: '🐞' },
    { name: 'leopard', emoji: '🐆' },
    { name: 'lion', emoji: '🦁' },
    { name: 'lizard', emoji: '🦎' },
    { name: 'llama', emoji: '🦙' },
    { name: 'monkey', emoji: '🐒' },
    { name: 'mouse', emoji: '🐁' },
    { name: 'octopus', emoji: '🐙' },
    { name: 'orangutan', emoji: '🦧' },
    { name: 'otter', emoji: '🦦' },
    { name: 'owl', emoji: '🦉' },
    { name: 'ox', emoji: '🐂' },
    { name: 'panda', emoji: '🐼' },
    { name: 'parrot', emoji: '🦜' },
    { name: 'penguin', emoji: '🐧' },
    { name: 'pig', emoji: '🐖' },
    { name: 'poodle', emoji: '🐩' },
    { name: 'rabbit', emoji: '🐰' },
    { name: 'raccoon', emoji: '🦝' },
    { name: 'ram', emoji: '🐏' },
    { name: 'rat', emoji: '🐀' },
    { name: 'rhinoceros', emoji: '🦏' },
    { name: 'rooster', emoji: '🐓' },
    { name: 'scorpion', emoji: '🦂' },
    { name: 'service dog', emoji: '🐕‍🦺' },
    { name: 'shark', emoji: '🦈' },
    { name: 'sheep', emoji: '🐑' },
    { name: 'skunk', emoji: '🦨' },
    { name: 'sloth', emoji: '🦥' },
    { name: 'snail', emoji: '🐌' },
    { name: 'snake', emoji: '🐍' },
    { name: 'spider', emoji: '🕷' },
    { name: 'squid', emoji: '🦑' },
    { name: 'swan', emoji: '🦢' },
    { name: 'tiger', emoji: '🐅' },
    { name: 'tiger face', emoji: '🐯' },
    { name: 'tropical fish', emoji: '🐠' },
    { name: 'turkey', emoji: '🦃' },
    { name: 'turtle', emoji: '🐢' },
    { name: 'two-hump camel', emoji: '🐫' },
    { name: 'unicorn', emoji: '🦄' },
    { name: 'whale', emoji: '🐋' },
    { name: 'wolf', emoji: '🐺' },
    { name: 'zebra', emoji: '🦓' },
    { name: 'link', emoji: 'sprite' }
];
interface Sprite {
    name: string;
    url: string;
}
const Sprites: Sprite[] = [
    { name: 'link', url: 'https://i.imgur.com/sCrkzvs.png' }
];

let Selected_Tama: Tama_emoji;
let move: boolean = true
let tama_hp: number
let tama_hunger:number
let tama_fun:number
let tama_exp:number
let tama_lvl:number
let size:number = 1
let lastHole: HTMLElement;
let timeUp:boolean = false;
let score:number = 0;
let intervalIDs: number[] = [];
let backgroundPositionX: number = 0;
let backgroundPositionY: number = 0;
let walk_direction : string = `forward`
//init
select_board()
//btn click
if (btn_feed) {
    btn_feed.onclick = () => {
        if(tama_hunger < 100){
            tama_hunger++
            update_bars(tama_hp,tama_hunger,tama_fun,tama_exp)
        }
    };
}
if (btn_play) {
    btn_play.onclick = () => {
        game_start?.classList.toggle(`hidden`)
        startGame()
    }
}

//functions
//whack mole
function randomHole(holes: NodeListOf<HTMLElement>): HTMLElement {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}
function peep(): void {
    const time = RNG(200, 1000);
    const hole = randomHole(holes);
    if(Selected_Tama.emoji === `sprite`){
        Sprites.forEach((sprite) => {
            if(sprite.name === Selected_Tama.name){
                const sp = document.createElement('div');
                sp.style.backgroundImage = `url("${sprite.url}")`
                sp.style.width = `64px`
                sp.style.height = `64px`
                hole.appendChild(sp)
            }
        })
    }
    else hole.textContent = Selected_Tama.emoji
    hole.classList.add('up');
    setTimeout(() => {
        hole.textContent = ``
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time);
}
function startGame(): void {
    scoreBoard.textContent = '0';
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => {
        timeUp = true
        tama_fun += score
        game_start?.classList.toggle(`hidden`)
        update_bars(tama_hp,tama_hunger,tama_fun,tama_exp)
    }, 10000);
}
function whack(event: Event): void {
    if (!(event.target instanceof HTMLElement)) return;
    const target = event.target;
    const hole = target.closest('.hole');
    if (!event.isTrusted || !hole || !hole.classList.contains('up')) return;
    score++;
    scoreBoard.textContent = score.toString();
    hole.classList.remove('up');
}
holes.forEach(hole => {
    const mole = document.createElement('div');
    mole.classList.add('mole');
    hole.appendChild(mole);
    hole.addEventListener('click', whack);
});
//------
function update_Sprite(sprite: HTMLDivElement)  {
    if(walk_direction === `forward`){
        backgroundPositionY = 0;
    }
    if(walk_direction === `back`){
        backgroundPositionY = 64;
    }
    if(walk_direction === `left`){
        backgroundPositionY = 192;
    }
    if(walk_direction === `right`){
        backgroundPositionY = 128;
    }
    backgroundPositionX -= 64;
    if (backgroundPositionX <= -256) {
        backgroundPositionX = 0;
    }
    sprite.style.backgroundPosition = `${backgroundPositionX}px ${backgroundPositionY}px`;
}

function select_board() {
    if(!select_tama) return console.log(`empty tama List`)
    Tamas.forEach((new_tama) => {
        const tama = document.createElement('div');
        tama.classList.add('select_tama');
        if(new_tama.emoji === `sprite`){
            Sprites.forEach((sprite) => {
                if(sprite.name === new_tama.name){
                    tama.classList.add(`sprite`)
                    tama.style.backgroundImage = `url("${sprite.url}")`
                    tama.style.transition = `none`
                    const intervalID = setInterval(() => update_Sprite(tama), 200);
                    intervalIDs.push(intervalID);
                }
            })
        }
        else  tama.textContent = `${new_tama.emoji}`;

        tama.title = new_tama.name;
        tama.onclick = () => {
            if(!start) return console.log(`empty start div`)
            start.classList.toggle(`hidden`)
            Selected_Tama = new_tama
            tama_hp = RNG(60,80)
            tama_hunger = RNG(40,70)
            tama_fun = RNG(40,70)
            tama_exp = 0
            tama_lvl = 0
            update_bars(tama_hp,tama_hunger,tama_fun,tama_exp)
            add_tama_to_playground(Selected_Tama)
        }
        select_tama.appendChild(tama);
    });
}
function add_tama_to_playground(new_tama: Tama_emoji) {
    if(play_area){
        const newTama = document.createElement('div');
        newTama.classList.add('new_tama');
        newTama.style.fontSize = `25px`
        newTama.textContent = new_tama.emoji;
        Sprites.forEach((sprite) => {
            if(sprite.name === new_tama.name){
                newTama.textContent = ` `
                setImageSize(sprite.url, newTama, 4)
                newTama.style.backgroundImage = `url("${sprite.url}")`
                newTama.style.transition = `none`
                clear_intervals()
                const intervalID = setInterval(() => update_Sprite(newTama), 200);
                intervalIDs.push(intervalID);
            }
        })
        play_area.appendChild(newTama);
        move_anim(newTama)
    }
}
function clear_intervals() {
    intervalIDs.forEach(id => clearInterval(id));
    intervalIDs = [];
}
function setImageSize(url: string, element: HTMLDivElement, divided: number): void {
    const img = new Image();
    img.onload = function() {
        element.style.width = `${img.width / divided}px`;
        element.style.height = `${img.height / divided}px`;
    };
    img.src = url;
}
function move_anim(newTama:HTMLDivElement){
    let maxX: number
    let maxY: number
    if(play_area){
        maxX = play_area.clientWidth - newTama.clientWidth
        maxY = play_area.clientHeight - newTama.clientHeight

        const duration = RNG(2000, 5000)
        const delay = RNG(0, 1000)
        newTama.style.transition = `left ${duration}ms ease-out ${delay}ms, top ${duration}ms ease-out ${delay}ms`;

        let new_x: number = RNG(0,maxX)
        let new_y: number = RNG(0,maxY)
        check_direction(parseInt(newTama.style.left), parseInt(newTama.style.top), new_x, new_y)

        newTama.style.left = `${new_x}px`;
        newTama.style.top = `${new_y}px`;

        setTimeout(() => {
            if(move){
                check_status(newTama)
                update_bars(tama_hp, tama_hunger,tama_fun,tama_exp)
                move_anim(newTama)
            }
        }, duration + delay);
    }
}
function check_direction(prev_x: number = 0, prev_y: number = 0, new_x: number, new_y: number): void {
    const diff_x = prev_x - new_x;
    const diff_y = prev_y - new_y;

    if (Math.abs(diff_x) > Math.abs(diff_y)) {
        walk_direction = diff_x < 0 ? 'right' : 'left';
    } else {
        walk_direction = diff_y < 0 ? 'forward' : 'back';
    }
}
function check_status(newTama:HTMLDivElement){
    if(tama_hp > 0){
        if(tama_fun > 0 && tama_hunger > 0){
            if(tama_lvl < 100){
                tama_hunger--
                tama_fun--
                tama_exp += 10 * (100 - tama_lvl) / 100
                if(tama_exp >= 100){
                    tama_exp = 0
                    lvl_up(newTama)
                }
            }
            if(tama_fun > 50 && tama_hunger > 50){
                tama_hp++
            }
        }
        else{
            tama_hp -=  (100 - tama_lvl) / 100
        }
    }
   else {
       move = false
       newTama.remove()
        end_wrapper?.classList.toggle(`hidden`)
    }
}
function lvl_up(newTama : HTMLDivElement){
    tama_lvl++;
    size += 0.1
    newTama.style.transform = `scale(${size})`
    if(lvl_display)
        lvl_display.textContent = tama_lvl.toString()

}
function update_bars(hp: number, hunger: number, fun: number, lvl: number) {
    if (hp_bar) setProgress(hp_bar, hp);
    if (hunger_bar) setProgress(hunger_bar, hunger);
    if (fun_bar) setProgress(fun_bar, fun);
    if (lvl_bar) setProgress(lvl_bar, lvl);
}
function setProgress(element: HTMLDivElement, value: number) {
    element.style.width = value + '%';
}
function RNG(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}