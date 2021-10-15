const Plane = require ('./Plane');
const Passenger = require ('./Passenger');


describe('Plane', () => {
    test('type is', () => {
        expect(() => new Plane()).toThrowError('Plane must have a type');
    });
    test('board plane', () => {
        const newPassenger = new Passenger('rafa', '12345', '25a');
        const newPlane = new Plane('boeing');
        expect(newPlane.passengers.length).toBe(0);
        newPlane.board(newPassenger);
        expect(newPlane.passengers.length).toBe(1);
    });
});