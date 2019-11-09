class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    draw() {
        let cx = document.querySelector("canvas").getContext("2d");
        cx.beginPath();
        cx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle)
        cx.stroke();
        cx.fillStyle = this.fillColor;
        cx.fill();

    }
};
setInterval(() => {

    const c1 = new Circle(Math.floor(Math.random() * 400), Math.floor(Math.random() * 450), Math.floor(Math.random() * 50), 0, 2 * Math.PI, `#${Math.floor(Math.random() * (30 * 30 * 30))}`)

    return c1.draw();

}, 500)
