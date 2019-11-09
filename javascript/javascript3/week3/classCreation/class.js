class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
    }
    draw() {
        let cx = document.querySelector("canvas").getContext("2d");
        cx.beginPath();
        cx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle)
        cx.stroke();
        cx.fillStyle = "teal";
        cx.fill();

    }


};

const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, '#0000');
const c2 = new Circle(150, 80, 30, 0, 2 * Math.PI, '#0000');
const c3 = new Circle(250, 100, 40, 0, 2 * Math.PI, '#0000');
c1.draw();
c2.draw();
c3.draw();
