class Passenger {
    constructor(name, passportNumber, seatNumber) {
        this.name = name;
        this.passportNumber = passportNumber;
        this.seatNumber = seatNumber;
        this.bags = [];
        if (!this.name)
            throw new Error('passenger must have a name');
        if (!this.passportNumber)
            throw new Error('passenger must have a passport number');
        if (!this.seatNumber)
            throw new Error('passenger must have a seat number');
    }
    addBag(bag) {
        if (typeof bag === 'object' && bag.constructor.name === 'Bag')
            this.bags.push(bag);
        else
            throw new Error('must be a bag');
    }
}

module.exports = Passenger;