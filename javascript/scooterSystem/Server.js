const { App } = require('./App');

/*
All variables and methods inside the Server class will be defined as static,
as we'll not need to create instances of the Server class (only one server). 
I.e. we define it as static so that we can access its variables and methods 
straight from the class and not from its instances.
*/
class Server {
    static handleDownloadRequest() {
        return new App();
    };
    static handleBrokenScooter(scooter) {
        console.log('Apologies for the inconvenience');
        scooter.isBroken = true;
        scooter.isAvailable = false;
    };
    static handlePayment(user) {
        if (user.userApp.appUser === null)
            throw new Error('user not registered');
        if (user.userApp.appUser.bankDetails === 'invalid')
            throw new Error('invalid bank details');
        else {
            user.successfulPayment = true; 
            console.log(`Payment processed for account: ${user.bankDetails}`);
        };
    };
};

module.exports = { Server };