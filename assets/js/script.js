const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud1 = document.querySelector('.cloud1');
const cloud2 = document.querySelector('.cloud2');
const cloud3 = document.querySelector('.cloud3');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloud1Position = cloud1.offsetLeft;
    const cloud2Position = cloud2.offsetLeft;
    const cloud3Position = cloud3.offsetLeft;

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './assets/images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        cloud1.style.animation = 'none';
        cloud1.style.left = `${cloud1Position}px`;

        cloud2.style.animation = 'none';
        cloud2.style.left = `${cloud2Position}px`;

        cloud3.style.animation = 'none';
        cloud3.style.left = `${cloud3Position}px`;

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);