// Parent class for Circle, Triangle, and Square. Establishes method to set the color of the given shape.
class Shape {
    constructor(){
        this.color = '';
    }

    setColor(setColor){
        this.color = setColor;
    }
}

// Each shape establishes a render method that returns a part of an svg string for an appropriately sized shape of the color inherited from the setColor method.
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }

}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,10 250,190 50,190"  fill="${this.color}" />`
    }

}

class Square extends Shape {
    render() {
        return `<rect x="50" width="200" height="200" fill="${this.color}" />`
    }

}

// Export shapes to the index and test files.
module.exports = { Circle, Triangle, Square };