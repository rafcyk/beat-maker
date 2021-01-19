const wrapper = document.querySelector('.wrapper');
let radius = 0;
const rects = [];
const shapes = ['square','four-square','circle']

for(let i = 0; i < 36; i ++){
    const rect = document.createElement('div');
    rect.className = 'eq-rect';
    rect.style.transform = `rotate(${radius}deg)`;
    wrapper.appendChild(rect);
    radius += 10;
    rects.push(rect);
}

function showRect() {
    rects.forEach(rect => {
        let min = Math.ceil(130);
        let max = Math.floor(160);
        let minColor = Math.ceil(0);
        let maxColor = Math.floor(250);
        let r = Math.floor(Math.random() * (maxColor - minColor)) + minColor;
        let g = Math.floor(Math.random() * (maxColor - minColor)) + minColor;
        let b = Math.floor(Math.random() * (maxColor - minColor)) + minColor;
        let r2 = Math.floor(Math.random() * (maxColor - minColor)) + minColor;
        let g2 = Math.floor(Math.random() * (maxColor - minColor)) + minColor;
        let b2 = Math.floor(Math.random() * (maxColor - minColor)) + minColor;
        const height = Math.floor(Math.random() * (max - min)) + min;
        rect.animate([
            {minHeight: '110px',
            backgroundImage:`linear-gradient(to left, rgb(${r},${g},${b}), rgb(${r2},${g2},${b2}))`},
            {minHeight: `${height}px`},
            {minHeight: '110px'},
        ],{
            duration:1000,
            easing: 'ease-out'
        })
    });
}

function drawShapes(e) {

    //draw shape
    let chooseShape = shapes[Math.floor(Math.random() * shapes.length)]
    console.log(chooseShape);

    let mouseX = e.clientX;
    let mouseY = e.clientY;
    const animateTime = 1000;

    //linear gradient values
    let min = Math.ceil(0);
    let max = Math.floor(250);
    let r = Math.floor(Math.random() * (max - min)) + min;
    let g = Math.floor(Math.random() * (max - min)) + min;
    let b = Math.floor(Math.random() * (max - min)) + min;
    let r2 = Math.floor(Math.random() * (max - min)) + min;
    let g2 = Math.floor(Math.random() * (max - min)) + min;
    let b2 = Math.floor(Math.random() * (max - min)) + min;
    const rectSize = 1000;
    const rectShape = document.createElement('div');
    rectShape.style.position='absolute';

    function removeAnimate() {
        setTimeout(() => {
            rectShape.remove();
        }, 1000);
    }

    switch (chooseShape) {
        case 'square':
            rectShape.className = chooseShape;
            wrapper.appendChild(rectShape);
            rectShape.style.borderImageSource = `linear-gradient(to left, rgb(${r},${g},${b}), rgb(${r2},${g2},${b2}))`
        
            rectShape.animate([
                {minWidth:'0px',
                minHeight:'0px',
                top:`${mouseY}px`,
                left:`${mouseX}px`,
                transform:`rotate(0deg)`,
            },
                {minWidth:`${rectSize}px`,
                minHeight:`${rectSize}px`,
                top:`${mouseY - rectSize/2}px`,
                left:`${mouseX - rectSize/2}px`,
                transform:`rotate(360deg)`},
            ],{
                duration:animateTime,
            })
        
            removeAnimate();

        break;

        case 'four-square':
            rectShape.className = chooseShape;
            wrapper.appendChild(rectShape);
            rectShape.style.borderImageSource = `linear-gradient(to left, rgb(${r},${g},${b}), rgb(${r2},${g2},${b2}))`
            
            rectShape.animate([
                {minWidth:'0px',
                minHeight:'0px',
                top:`${mouseY}px`,
                left:`${mouseX}px`,
                transform:`rotate(0deg)`,
            },
                {minWidth:`${rectSize}px`,
                minHeight:`${rectSize}px`,
                top:`${mouseY - rectSize/2}px`,
                left:`${mouseX - rectSize/2}px`,
                transform:`rotate(360deg)`},
            ],{
                duration:animateTime,
            })

            removeAnimate();

        break;
    
        case 'circle':
            rectShape.className = chooseShape;
            wrapper.appendChild(rectShape);
            rectShape.style.borderColor = `rgb(${r},${g},${b})`

            rectShape.animate([
                {minWidth:'0px',
                minHeight:'0px',
                top:`${mouseY}px`,
                left:`${mouseX}px`
            },
                {minWidth:`${rectSize}px`,
                minHeight:`${rectSize}px`,
                top:`${mouseY - rectSize/2}px`,
                left:`${mouseX - rectSize/2}px`},
            ],{
                duration:animateTime,
            })

            removeAnimate();

        break;

        case 'triangle':
            rectShape.className = chooseShape;
            wrapper.appendChild(rectShape);
            rectShape.style.borderColor = `rgb(${r},${g},${b})`

            rectShape.animate([
                {minWidth:'0px',
                minHeight:'0px',
                top:`${mouseY}px`,
                left:`${mouseX}px`
            },
                {minWidth:`${rectSize}px`,
                minHeight:`${rectSize}px`,
                top:`${mouseY - rectSize/2}px`,
                left:`${mouseX - rectSize/2}px`},
            ],{
                duration:animateTime,
            })

            removeAnimate();

        break;
    }

}

wrapper.addEventListener('click', showRect);
wrapper.addEventListener('click', drawShapes);