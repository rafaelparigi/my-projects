const Airport = require ('./Airport');


describe('Airport', () => {
    test('name is', () => {
        expect(() => new Airport()).toThrowError('airport must have a name');
    })
});