const User = require('./User');
const Server = require('./Server');
const Scooter = require('./Scooter');

class App {
    constructor() {
        //initialises to null as user is not yet registered
        this.appUser = null;
    };
    registerUser(user) {
        if(user.age < 18)
            throw new Error('user must be over 18');
        else
            this.appUser = user;
    };
    rentScooter(scooter) {
        //in case user has downloaded app but is not registered
        if (this.appUser === null)
            throw new Error('user is not registered');
        if (!scooter.isAvailable)
            throw new Error('scooter is not available');
        else if (scooter.isBroken)
            throw new Error('scooter is not available');
        else 
            scooter.setIsAvailable(false);
    };
    reportBrokenScooter(scooter) {
        Server.handleBrokenScooter(scooter);
    };
    takePayment() {
        Server.handlePayment(appUser);
    };
};

module.exports = App;
