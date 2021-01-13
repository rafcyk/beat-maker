const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

window.addEventListener('resize', resizeWindow)

function resizeWindow() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    draw();
}
resizeWindow();


function draw() {
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, 50, 0, 2 * Math.PI)
    ctx.fillStyle = 'black';
    ctx.fill();
}