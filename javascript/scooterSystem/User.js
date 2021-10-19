const { Server } = require('http');
const App = require('./App');

class User {
    constructor(age, bankDetails) {
        this.age = age;
        this.bankDetails = bankDetails;
        this.userApp = null;
    };
    downloadApp() {
        //initialises userApp to a new instance of the App class
        this.userApp = Server.handleDownloadRequest();
    };
    registerDetailsInApp() {
        //passes this user as an argument to the registerUser method of our instance of the App class (userApp) 
        this.userApp.registerUser(this);
    };
};

module.exports = User;