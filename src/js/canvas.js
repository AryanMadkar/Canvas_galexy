import utils, { distance, randomColor } from "./utils";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.backgroundColor = "black";

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const colors = [
  "#55AD9B",
  "#F6FB7A",
  "#FFFED3",
  "#FFA38F",
  "#FFD18E",
  "#7743DB",
  "#91DDCF",
  "#B0EBB4",
  "#E178C5",
  "#FFBB64",
  "#00A9FF",
  "#FFFFFF",
];

// Event Listeners
addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

let mousedown = false;
window.addEventListener("mousedown", () => {
  mousedown = true;
});

window.addEventListener("mouseup", () => {
  mousedown = false;
});

// Objects
class Circles {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.shadowColor = this.color;
    c.shadowBlur = 10;
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

  update() {
    this.draw();
  }
}

// Implementation
let circle;
let nitrate = 500;
function init() {
  circle = [];

  for (let i = 0; i < nitrate; i++) {
    let canvaswidth = canvas.width + nitrate;
    let canvasheight = canvas.height + nitrate;
    var cr2 =
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")";
    let radius = Math.random() * 3;
    let x =
      Math.random() * (canvaswidth - radius * 2) - canvaswidth / 2 + radius;
    let y =
      Math.random() * (canvasheight - radius * 2) - canvasheight / 2 + radius;
    for (let j = 0; j < circle.length; j++) {
      if (distance(x, y, circle[j].x, circle[j].y) - radius * 2 < 0) {
        x =
          Math.random() * (canvaswidth - radius * 2) - canvaswidth / 2 + radius;
        y =
          Math.random() * (canvasheight - radius * 2) -
          canvasheight / 2 +
          radius;
        j -= 1;
      }
    }
    let color = cr2;
    circle.push(new Circles(x, y, radius, color));
  }
}

let increment = 0;
let alpha = 1;
// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = `rgba(10, 10, 10, ${alpha})`;
  c.fillRect(0, 0, canvas.width, canvas.height);

  c.save();
  c.translate(canvas.width / 2, canvas.height / 2);
  c.rotate(increment);
  circle.forEach((circle) => {
    circle.update();
  });
  c.restore();
  increment += 0.001;
  if (mousedown) {
    if (alpha >= 0.1) {
      alpha -= 0.01;
    }
  } else if (!mousedown) {
    if (alpha < 1) {
      alpha += 0.01;
    }
  }
}

init();
animate();
