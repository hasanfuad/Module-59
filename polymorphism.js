class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  area() {
    return this.width * this.length;
  }
}

class Triangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }

  area() {
    return this.height * this.base * 0.5;
  }
}

const shape = [new Circle(10), new Rectangle(10, 5), new Triangle(10, 10)];

for (let i = 0; i < shape.length; i++) {
  const element = shape[i];
  console.log(element.area());
}
