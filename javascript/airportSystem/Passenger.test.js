const Passenger = require('./Passenger');
const Bag = require('./Bag');


describe('Passenger', () => {
    test('name is', () => {
        expect(() => new Passenger(undefined, 'random', 'random')).toThrowError('passenger must have a name');
    });
    test('passport number is', () => {
        expect(() => new Passenger('name', undefined, 'random')).toThrowError('passenger must have a passport number');
    });
    test('seat number is', () => {
        expect(() => new Passenger('random', 'random', undefined)).toThrowError('passenger must have a seat number');
    });
    test('addBag method', () => {
        const myPassenger = new Passenger('Rafa', '1234567', '25A');
        expect(myPassenger.bags.length).toBe(0);
        myPassenger.addBag(new Bag(10));
        expect(myPassenger.bags.length).toBe(1);
    });
    test('addBag throws error for non-bags', () => {
        const myPassenger1 = new Passenger('StringA', '7654321', 'A52');
        expect(() => myPassenger1.addBag('notabag')).toThrowError('must be a bag');
    });
});