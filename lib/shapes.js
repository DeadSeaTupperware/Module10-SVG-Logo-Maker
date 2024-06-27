class Shape {
    constructor(){
        this.color = '';
    }

    setColor(setColor){
        this.color = setColor;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="50" r="40" fill="${this.color}" />`
    }

}

class Triangle extends Shape {
    render() {
        return `<polygon points="50,10 90,90 10,90" fill="${this.color}" />`
    }

}

class Square extends Shape {
    render() {
        return `<rect x="30" y="30" width="40" height="40" fill="${this.color}" />`
    }

}