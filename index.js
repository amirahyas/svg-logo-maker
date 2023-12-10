const { Circle, Triangle, Square } = require('./lib/shapes.js');
const inquirer = require('inquirer');

// Create instances of shapes
const redCircle = new Circle('red', 30);
const blueTriangle = new Triangle('blue', 40);
const greenSquare = new Square('green', 50);

// Render SVG strings for the shapes
const svgStringCircle = redCircle.render();
const svgStringTriangle = blueTriangle.render();
const svgStringSquare = greenSquare.render();

// Display SVG strings (for demonstration)
console.log('SVG for Circle:');
console.log(svgStringCircle);
console.log('SVG for Triangle:');
console.log(svgStringTriangle);
console.log('SVG for Square:');
console.log(svgStringSquare);



// Create Inquirer prompts
const shapeQuestions = [
  {
    type: 'list',
    name: 'shape',
    message: 'Select a shape:',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'color',
    message: 'Enter the color (keyword or hexadecimal):',
  },
  {
    type: 'input',
    name: 'dimension',
    message: 'Enter the dimension (radius or side length):',
  },
];

// Function to create the shape based on user input
async function createShape() {
  try {
    const answers = await inquirer.prompt(shapeQuestions);
    let shape;

    switch (answers.shape) {
      case 'Circle':
        shape = new Circle(answers.color, parseInt(answers.dimension));
        break;
      case 'Triangle':
        shape = new Triangle(answers.color, parseInt(answers.dimension));
        break;
      case 'Square':
        shape = new Square(answers.color, parseInt(answers.dimension));
        break;
      default:
        console.log('Invalid shape selected.');
        return;
    }

    const svgString = shape.render();
    console.log('SVG string for the chosen shape:');
    console.log(svgString);
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

// Run the function to create the shape based on user input
createShape();
