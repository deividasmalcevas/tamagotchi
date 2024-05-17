//get from HTML----
const start = document.getElementById(`start`) as HTMLDivElement | null;
const select_tama = document.getElementById(`select_tama`) as HTMLDivElement | null;
const hp_bar = document.getElementById('hp-fill') as HTMLDivElement | null;
const hunger_bar = document.getElementById('hunger-fill') as HTMLDivElement | null;
const fun_bar = document.getElementById('fun-fill') as HTMLDivElement | null;
const play_area = document.getElementById('play_area') as HTMLDivElement | null;
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
    { name: 'zebra', emoji: '🦓' }
];
let Selected_Tama: Tama_emoji;
let move: boolean = true
//init
select_board()

//functions
function select_board() {
    if(!select_tama) return console.log(`empty tama List`)
    Tamas.forEach((new_tama) => {
        const tama = document.createElement('div');
        tama.classList.add('select_tama');
        tama.textContent = `${new_tama.emoji}`;
        tama.title = new_tama.name;
        tama.onclick = () => {
            if(!start) return console.log(`empty start div`)
            start.classList.toggle(`hidden`)
            Selected_Tama = new_tama
            update_bars(RNG(60,80),RNG(40,70),RNG(40,70))
            add_tama_to_playground(Selected_Tama)
        }
        select_tama.appendChild(tama);
    });
}
function add_tama_to_playground(new_tama: Tama_emoji) {
    if(play_area){
        const newTama = document.createElement('div');
        newTama.classList.add('new_tama');
        newTama.textContent = new_tama.emoji;
        play_area.appendChild(newTama);
        move_anim(newTama,play_area.clientWidth - newTama.clientWidth, play_area.clientHeight - newTama.clientHeight)
    }
}
function move_anim(newTama:HTMLDivElement, maxX: number, maxY:number, ){
    const duration = RNG(2000, 5000)
    const delay = RNG(0, 1000)
    newTama.style.transition = `left ${duration}ms ease-out ${delay}ms, top ${duration}ms ease-out ${delay}ms`;
    newTama.style.left = `${RNG(0,maxX)}px`;
    newTama.style.top = `${RNG(0,maxY)}px`;

    setTimeout(() => {
        move_anim(newTama,maxX, maxY)
    }, duration + delay);
}
function update_bars(hp: number, hunger: number, fun: number) {
    if (hp_bar) setProgress(hp_bar, hp);
    if (hunger_bar) setProgress(hunger_bar, hunger);
    if (fun_bar) setProgress(fun_bar, fun);
}
function setProgress(element: HTMLDivElement, value: number) {
    element.style.width = value + '%';
}
function RNG(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}