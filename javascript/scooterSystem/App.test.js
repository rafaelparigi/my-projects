const { Server } = require('./Server');
const { App } = require('./App');
const { User }= require('./User');
const { Scooter } = require('./Scooter');

describe('App', () => {
    test('registerUser method should throw error when user younger than 18', () => {
        const myApp = new App();
        const youngUser = new User(17, '12345');
        expect(() => myApp.registerUser(youngUser)).toThrowError('user must be over 18');
    });
    test('registerUser method should not throw error when user is older than 18', () => {
        const myApp = new App();
        const oldUser = new User(80, '123');
        expect(() => myApp.registerUser(oldUser)).not.toThrowError();
    });
    test('registering a user makes that user the appUser', () => {
        const myApp = new App();
        const user = new User(20, '1234');
        myApp.registerUser(user);
        expect(myApp.appUser).toBe(user);
    });
    test('rentScooter method should throw error if user is not registered', () => {
        const myApp = new App();
        const scooter = new Scooter(true, false);
        expect(() => myApp.rentScooter(scooter)).toThrowError('user is not registered');
    });
    test('rentScooter method should throw error if scooter is not available', () => {
        const myApp = new App();
        const unavailableScooter = new Scooter(false, false);
        myApp.registerUser(new User(20, '123'));
        expect(() => myApp.rentScooter(unavailableScooter)).toThrowError('scooter is not available');
    });
    test('rentScooter method throws error when scooter is broken', () =>{
        const myApp = new App();
        const brokenScooter = new Scooter(true, true);
        myApp.registerUser(new User(20, '12345'));
        expect(() => myApp.rentScooter(brokenScooter)).toThrowError('scooter is broken')
    });
    test('rentScooter rents scooter when criteria are met, then sets scooter to unavailable', () => {
        const myApp = new App();
        const scooter = new Scooter(true, false);
        myApp.registerUser(new User(20, '12345'));
        expect(scooter.isAvailable).toBe(true);
        myApp.rentScooter(scooter);
        expect(scooter.isAvailable).toBe(false);
    });
    test('if scooter is broken and unavailable after we execute reportBrokenScooter', () => {
        const myApp = new App();
        const scooter = new Scooter(true, false);
        const server = new Server
        expect(scooter.isBroken).toBe(false);
        expect(scooter.isAvailable).toBe(true);
        expect(() => myApp.reportBrokenScooter(scooter, server)).not.toThrowError();
        expect(scooter.isBroken).toBe(true);
        expect(scooter.isAvailable).toBe(false);
    });
    test('if takePayment handles null users', () => {
        const server = new Server();
        const myUser = new User(30, 'anything');
        myUser.downloadApp(server);
        expect(() => myUser.userApp.takePayment(server)).toThrowError('user not registered');
    });
    test('if takePayment handles invalid bank details', () => {
        const server = new Server();
        const myUser = new User(30, 'invalid');
        myUser.downloadApp(server);
        myUser.registerDetailsInApp();
        expect(() => myUser.userApp.takePayment(server)).toThrowError('invalid bank details');
    });
    test('if takePayment handles valid bank details', () => {
        const server = new Server();
        const myUser = new User(30, 'anything but invalid');
        myUser.downloadApp(server)
        myUser.registerDetailsInApp();
        myUser.userApp.takePayment(server);
        expect(myUser.successfulPayment).toBe(true);
    });
});

