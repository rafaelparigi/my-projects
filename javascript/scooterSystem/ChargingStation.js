const Scooter = require ('./Scooter');

class ChargingStation {
    constructor(distanceTravelled) {
        this.distanceTravelled = distanceTravelled;
    };
    
    handleDockedScooter(scooter) {
        // start charging scooter
        this.chargeScooter();
    };

    //The maximum range of a fully charged scooter is 32 km,
    //so we'll have a chargingLevel 0 ~ 1
    chargingLevel = 1 - (distanceTravelled/32);
    MILLISECONDS_IN_TWO_HOURS = 7_200_000;

    chargeScooter(scooter) {
        //make scooter available after a certain amount of time 0 ~ 2hours
        setTimeout(() => scooter.setIsAvailable(true), this.MILLISECONDS_IN_TWO_HOURS * (1 - this.chargingLevel));
    };
};

module.exports = ChargingStation;