"use strict";
//get from HTML----
const start = document.getElementById(`start`);
const select_tama = document.getElementById(`select_tama`);
const hp_bar = document.getElementById('hp-fill');
const hunger_bar = document.getElementById('hunger-fill');
const fun_bar = document.getElementById('fun-fill');
const lvl_bar = document.getElementById('lvl-fill');
const end_wrapper = document.getElementById('end');
const play_area = document.getElementById('play_area');
const lvl_display = document.getElementById('tama_lvl');
const btn_feed = document.getElementById('btn_feed');
const btn_play = document.getElementById('btn_play');
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.getElementById('score');
const game_start = document.getElementById('game_start');
const Tamas = [
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
    { name: 'zebra', emoji: '🦓' }
];
let Selected_Tama;
let move = true;
let tama_hp;
let tama_hunger;
let tama_fun;
let tama_exp;
let tama_lvl;
let size = 20;
let lastHole;
let timeUp = false;
let score = 0;
//init
select_board();
//btn click
if (btn_feed) {
    btn_feed.onclick = () => {
        if (tama_hunger < 100) {
            tama_hunger++;
            update_bars(tama_hp, tama_hunger, tama_fun, tama_exp);
        }
    };
}
if (btn_play) {
    btn_play.onclick = () => {
        game_start?.classList.toggle(`hidden`);
        startGame();
    };
}
//functions
//whack mole
function randomHole(holes) {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}
function peep() {
    const time = RNG(200, 1000);
    const hole = randomHole(holes);
    hole.textContent = Selected_Tama.emoji;
    hole.classList.add('up');
    setTimeout(() => {
        hole.textContent = ``;
        hole.classList.remove('up');
        if (!timeUp)
            peep();
    }, time);
}
function startGame() {
    scoreBoard.textContent = '0';
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => {
        timeUp = true;
        tama_fun += score;
        game_start?.classList.toggle(`hidden`);
        update_bars(tama_hp, tama_hunger, tama_fun, tama_exp);
    }, 10000);
}
function whack(event) {
    if (!(event.target instanceof HTMLElement))
        return;
    const target = event.target;
    const hole = target.closest('.hole');
    if (!event.isTrusted || !hole || !hole.classList.contains('up'))
        return;
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
//
function select_board() {
    if (!select_tama)
        return console.log(`empty tama List`);
    Tamas.forEach((new_tama) => {
        const tama = document.createElement('div');
        tama.classList.add('select_tama');
        tama.textContent = `${new_tama.emoji}`;
        tama.title = new_tama.name;
        tama.onclick = () => {
            if (!start)
                return console.log(`empty start div`);
            start.classList.toggle(`hidden`);
            Selected_Tama = new_tama;
            tama_hp = RNG(60, 80);
            tama_hunger = RNG(40, 70);
            tama_fun = RNG(40, 70);
            tama_exp = 0;
            tama_lvl = 0;
            update_bars(tama_hp, tama_hunger, tama_fun, tama_exp);
            add_tama_to_playground(Selected_Tama);
        };
        select_tama.appendChild(tama);
    });
}
function add_tama_to_playground(new_tama) {
    if (play_area) {
        const newTama = document.createElement('div');
        newTama.classList.add('new_tama');
        newTama.style.fontSize = `${size}px`;
        newTama.textContent = new_tama.emoji;
        play_area.appendChild(newTama);
        move_anim(newTama);
    }
}
function move_anim(newTama) {
    let maxX;
    let maxY;
    if (play_area) {
        maxX = play_area.clientWidth - newTama.clientWidth;
        maxY = play_area.clientHeight - newTama.clientHeight;
        const duration = RNG(2000, 5000);
        const delay = RNG(0, 1000);
        newTama.style.transition = `left ${duration}ms ease-out ${delay}ms, top ${duration}ms ease-out ${delay}ms`;
        newTama.style.left = `${RNG(0, maxX)}px`;
        newTama.style.top = `${RNG(0, maxY)}px`;
        setTimeout(() => {
            if (move) {
                check_status(newTama);
                update_bars(tama_hp, tama_hunger, tama_fun, tama_exp);
                move_anim(newTama);
            }
        }, duration + delay);
    }
}
function check_status(newTama) {
    if (tama_hp > 0) {
        if (tama_fun > 0 && tama_hunger > 0) {
            if (tama_lvl < 100) {
                tama_hunger--;
                tama_fun--;
                tama_exp += (100 - tama_lvl) / 100;
                if (tama_exp >= 100) {
                    tama_exp = 0;
                    lvl_up(newTama);
                }
            }
        }
        else {
            tama_hp -= (100 - tama_lvl) / 100;
        }
    }
    else {
        move = false;
        newTama.remove();
        end_wrapper?.classList.toggle(`hidden`);
    }
}
function lvl_up(newTama) {
    tama_lvl++;
    size += 5;
    newTama.style.fontSize = `${size}px`;
    if (lvl_display)
        lvl_display.textContent = tama_lvl.toString();
}
function update_bars(hp, hunger, fun, lvl) {
    if (hp_bar)
        setProgress(hp_bar, hp);
    if (hunger_bar)
        setProgress(hunger_bar, hunger);
    if (fun_bar)
        setProgress(fun_bar, fun);
    if (lvl_bar)
        setProgress(lvl_bar, lvl);
}
function setProgress(element, value) {
    element.style.width = value + '%';
}
function RNG(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
