class ChargingStation {

    MILLISECONDS_IN_TWO_HOURS = 7_200_000;

    async chargeScooter(scooter) {
        console.log('Starting charge');
        //set scooter to available and charged after a certain amount of time 0 ~ 2hours
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                scooter.chargingLevel = 1;
                scooter.setIsAvailable(true);
                resolve();
            }, this.MILLISECONDS_IN_TWO_HOURS * (1 - this.chargingLevel))
        });
    };
};

module.exports = { ChargingStation };