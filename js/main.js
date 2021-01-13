const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(canvas.width/2, canvas.height/2, 70, 0, 2 * Math.PI);
ctx.fillStyle = 'black';
ctx.fill();
