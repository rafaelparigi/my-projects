const Server = require('./Server');

class Scooter {
    constructor(isAvailable, isBroken, chargingLevel) {
        this.isAvailable = isAvailable;
        this.isBroken = isBroken;
        this.chargingLevel = chargingLevel;
    };
    setIsAvailable(scooterIsAvailable) {
        this.isAvailable = scooterIsAvailable;
    };
};

module.exports = Scooter;