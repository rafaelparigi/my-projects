const CrewMember = require ('./CrewMember');


describe('Crew member', () => {
    test('name is', () => {
        expect(() => new CrewMember(undefined, 'random', 'random')).toThrowError('Crew member must have a name');
    })
    test('position is', () => {
        expect(() => new CrewMember('random', undefined, 'random')).toThrowError('Crew member must have a position');
    })
    test('staff number is', () => {
        expect(() => new CrewMember('random', 'random', undefined)).toThrowError('Crew member must have a staff number');
    })
    test('no undefined arguments', () => {
        expect(() => new CrewMember('random', 'random', 'random')).not.toThrowError();
    })
});