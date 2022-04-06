const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
// blends the colors together
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw (e) {
    if(!isDrawing) return; // this will stop the function from running when we are not moused down
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;
    if(hue >= 360) {
        hue = 0;
    }

    // The first if statement below means that when the lineWidth reaches a 100, or goes down to 1, it flis the direction, so it only move between these numbers..
    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    // ..Then depending what the direction is, we increment the line width, or we decrement it.
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
    
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);