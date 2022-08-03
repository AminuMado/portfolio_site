export default class Circle {
  xCoordinate: number;
  yCoordinate: number;
  radius: number;
  color: string;
  xVelocity: number;
  yVelocity: number;
  randomTrueOrFalse: number;
  constructor(
    xCoordinate: number,
    yCoordinate: number,
    radius: number,
    color: string,
    randomTrueOrFalse: number
  ) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.radius = radius;
    this.color = color;
    this.randomTrueOrFalse = randomTrueOrFalse;

    //initial velocity direction
    if (this.randomTrueOrFalse === 1) {
      this.xVelocity = -Math.random() * 0.5;
    } else {
      this.xVelocity = Math.random() * 0.5;
    }
    if (randomTrueOrFalse === 1) {
      this.yVelocity = -Math.random() * 0.5;
    } else {
      this.yVelocity = Math.random() * 0.5;
    }
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(
      this.xCoordinate,
      this.yCoordinate,
      Math.abs(this.radius),
      0,
      Math.PI * 2
    );
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update(ctx: CanvasRenderingContext2D) {
    this.xCoordinate += this.xVelocity;
    this.yCoordinate += this.yVelocity;
    const canvasWidth = ctx.canvas.width;
    const canvasHeight = ctx.canvas.height;

    // Movement Functions
    if (
      this.xCoordinate + this.radius > canvasWidth ||
      this.xCoordinate - this.radius < 0
    ) {
      this.xVelocity = -this.xVelocity;
    }
    if (
      this.yCoordinate + this.radius > canvasHeight ||
      this.yCoordinate - this.radius < 0
    ) {
      this.yVelocity = -this.yVelocity;
    }

    this.draw(ctx);
  }
}
