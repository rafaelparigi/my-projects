class Plane {
    constructor(type) {
        this.type = type;
        this.passengers = [];
        if (!this.type)
            throw new Error('Plane must have a type');
    }
    board(passenger) {
        this.passengers.push(passenger);
    }
}

module.exports = Plane;