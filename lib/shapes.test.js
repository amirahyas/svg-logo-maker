const { Circle, Triangle, Square } = require('.lib/shapes.js');

describe('Circle', () => {
  test('renders SVG string for circle', () => {
    const circle = new Circle('red', 20);
    expect(circle.render()).toEqual('<circle cx="50" cy="50" r="20" fill="red" />');
  });
});

describe('Triangle', () => {
  test('renders SVG string for equilateral triangle', () => {
    const triangle = new Triangle('blue', 30);
    expect(triangle.render()).toEqual('<polygon points="50,35 35,85 65,85" fill="blue" />');
  });
});

describe('Square', () => {
  test('renders SVG string for square', () => {
    const square = new Square('green', 40);
    expect(square.render()).toEqual('<rect x="30" y="30" width="40" height="40" fill="green" />');
  });
});
S