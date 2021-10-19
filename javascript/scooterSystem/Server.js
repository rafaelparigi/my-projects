const User = require('./User');
const Scooter = require('./Scooter');

/*
All variables and methods inside the Server class will be defined as static,
as we'll not need to create instances of the Server class. I.e. we define it 
as static so that we can access its variables and methods straight from the 
class and not from its instances.
*/
class Server {
    static scooterList = [];
    static chargingStationList = [];

    static handleDownloadRequest() {
        return new App();
    };
    static handleBrokenScooter(scooter) {
        console.log('Apologies for the inconvenience');
        scooter.isBroken = true;
        scooter.isAvailable = false;
    };
    static handlePayment(user) {
        if (bankDetails === 'invalid')
            throw new Error('invalid bank details');
        else 
            console.log(`Payment processed for account: ${user.bankDetails}`);
    };
};