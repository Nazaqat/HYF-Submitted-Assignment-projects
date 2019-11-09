const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.fillStyle = "teal";
ctx.fill();
ctx.stroke();
