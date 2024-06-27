const {Circle, Triangle, Square} = require("./shapes.js");

describe('Circle', () => {
    test('testing rendering a purple circle', () => {
      const shape = new Circle();
      let color = "purple";
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}" />`);
    });
  });

  describe('Triangle', () => {
      test('testing rendering an orange triangle', () => {
        const shape = new Triangle();
        var color = "orange";
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="150,10 250,190 50,190"  fill="${color}" />`);
      });
    });
 
  describe('Square', () => {
      test('testing rendering a blue square', () => {
        const shape = new Square();
        var color = "blue";
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" width="200" height="200" fill="${color}" />`);
      });
    });
    