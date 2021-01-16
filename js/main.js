const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

let mainCircleSize = 100;
let biggerCircle = true;


window.addEventListener('resize', resizeWindow)

function resizeWindow() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const centerX = canvas.width/2;
    const centerY = canvas.height/2;
    ctx.translate(centerX , centerY);
}
resizeWindow();

canvas.addEventListener('click', drawFigure);



function drawFigure() {
    let i = 0;
    ctx.clearRect(-Math.floor(canvas.width/2),-Math.floor(canvas.height/2), canvas.width, canvas.height)

    const idFirstInterval = setInterval(() => {
        let min = Math.ceil(130);
        let max = Math.floor(150);
        const finalHeight = Math.floor(Math.random() * (max - min)) + min;
        ctx.beginPath();
        ctx.fillStyle = '#2c9da5';
        ctx.rotate(360/20);
        i++;
        
        const drawRect = setInterval(() => {
            ctx.fillRect(0,0, 20, min++);

            if(min > finalHeight){
                clearInterval(drawRect);
            }
        }, 10);

        if(i > 36){
            clearInterval(idFirstInterval);
        }

        console.log(i);
    }, 1000/120);

}
