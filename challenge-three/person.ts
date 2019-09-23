export class human {
    firstName: string;
    lastName: string;

    constructor (firstName: string, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

}


export let person = new human("John", "Doe");

export let greeting = `Nice to meet you, ${person.firstName}.`;
