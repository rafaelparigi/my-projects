class CrewMember {
    constructor(name, position, staffNumber) {
        this.name = name;
        this.position = position; 
        this.staffNumber = staffNumber;
        if (this.name === undefined)
            throw new Error('Crew member must have a name')
        if (this.position === undefined)
            throw new Error('Crew member must have a position')
        if (this.staffNumber === undefined)
            throw new Error('Crew member must have a staff number')        
    }
}

module.exports = CrewMember;