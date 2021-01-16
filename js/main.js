const wrapper = document.querySelector('.wrapper');
let radius = 0;
const rects = []

for(let i = 0; i < 36; i ++){
    const rect = document.createElement('div');
    rect.className = 'eq-rect';
    rect.style.transform = `rotate(${radius}deg)`;
    wrapper.appendChild(rect);
    radius += 10;
    console.log(radius)
    rects.push(rect);
}

wrapper.addEventListener('click', showRect);

function showRect() {

    rects.forEach(rect => {
        let min = Math.ceil(130);
        let max = Math.floor(160);
        const height = Math.floor(Math.random() * (max - min)) + min;
        rect.animate([
            {minHeight: '110px'},
            {minHeight: `${height}px`},
            {minHeight: '110px'}
        ],{
            duration:400
        })
    });
}