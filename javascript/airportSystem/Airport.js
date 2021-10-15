class Airport {
    constructor(name) {
        this.name = name
        if (name === undefined)
            throw new Error('airport must have a name');
    }
};

module.exports = Airport;