"use strict";
//get from HTML----
const start = document.getElementById(`start`);
const select_tama = document.getElementById(`select_tama`);
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
    { name: 'rabbit', emoji: '🐇' },
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
//init
select_board();
//functions
function select_board() {
    if (!select_tama)
        return console.log(`empty tama List`);
    Tamas.forEach((new_tama) => {
        const tama = document.createElement('div');
        tama.classList.add('select_tama');
        tama.textContent = `${new_tama.emoji}`;
        tama.onclick = () => {
            if (!start)
                return console.log(`empty start div`);
            start.classList.toggle(`hidden`);
            Selected_Tama = new_tama;
        };
        select_tama.appendChild(tama);
    });
}
