class Scooter {
    constructor(isAvailable, isBroken) {
        this.isAvailable = isAvailable;
        this.isBroken = isBroken;
        //chargingLevel will be 1 when fully charged, and 0 when no charge. 
        this.chargingLevel = 1;
    };
    setIsAvailable(isScooterAvailable) {
        this.isAvailable = isScooterAvailable;
    };
    adjustChargingLevel(distance) {
    //The maximum range of a fully charged scooter is 32 km,
    //so we'll keep chargingLevel 0 ~ 1
        this.chargingLevel -= distance/32;
    };
};

module.exports = { Scooter };