const { Scooter } = require('./Scooter');
const { Server } = require('./Server');
const { User } = require('./User');

describe('Server', () => {
    test('handleDownloadRequest returns an App', () => {
        const newApp = Server.handleDownloadRequest();
        expect(newApp.constructor.name).toBe('App');
    });
    test('handleBrokenScooter turns scooter status to broken and not available', () => {
        const scooter = new Scooter(true, false);
        Server.handleBrokenScooter(scooter);
        expect(scooter.isBroken).toBe(true);
        expect(scooter.isAvailable).toBe(false);
    });
    test('handlePayment throws error if user is not registered', () => {
        const myUser = new User(25, 'random');
        myUser.downloadApp();
        expect(() => Server.handlePayment(myUser)).toThrowError('user not registered'); 
        myUser.registerDetailsInApp();
        expect(() => Server.handlePayment(myUser)).not.toThrowError(); 
    });
    test('handlePayment throws error if bank details are invalid', () => {
        const myUser = new User(25, 'valid');
        myUser.downloadApp();
        myUser.registerDetailsInApp();
        expect(() => Server.handlePayment(myUser)).not.toThrowError();
        const myUser1 = new User(25, 'invalid');
        myUser1.downloadApp();
        myUser1.registerDetailsInApp();
        expect(() => Server.handlePayment(myUser1)).toThrowError('invalid bank details'); 
    });
    test('handlePayment sets user.successfulPayment to true', () => {
        const myUser = new User(25, 'valid');
        expect(myUser.successfulPayment).toBe(null);
        myUser.downloadApp();
        myUser.registerDetailsInApp();
        Server.handlePayment(myUser);
        expect(myUser.successfulPayment).toBe(true);
    });
});