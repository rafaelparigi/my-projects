function sum(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++){
        total += array[i];
    }
    return total;
}
console.log(sum([1, 2, 3, 5]));

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

console.log(Rectangle.name);
const newRectangle = new Rectangle(5, 10);
console.log(newRectangle.height);
