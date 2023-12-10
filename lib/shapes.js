// Shape class
class Shape {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      // This method will be overridden by child classes
      return '';
    }
  }
  
  // Circle class extending Shape
  class Circle extends Shape {
    constructor(color, radius) {
      super(color);
      this.radius = radius;
    }
  
    render() {
      return `<circle cx="50" cy="50" r="${this.radius}" fill="${this.color}" />`;
    }
  }
  
  // Triangle class extending Shape
  class Triangle extends Shape {
    constructor(color, sideLength) {
      super(color);
      this.sideLength = sideLength;
    }
  
    render() {
      const height = (Math.sqrt(3) / 2) * this.sideLength;
      return `<polygon points="50,${50 - height / 3} ${50 - this.sideLength / 2},${50 + height / 2} ${50 + this.sideLength / 2},${50 + height / 2}" fill="${this.color}" />`;
    }
  }
  
  // Square class extending Shape
  class Square extends Shape {
    constructor(color, sideLength) {
      super(color);
      this.sideLength = sideLength;
    }
  
    render() {
      return `<rect x="${50 - this.sideLength / 2}" y="${50 - this.sideLength / 2}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
  }

  