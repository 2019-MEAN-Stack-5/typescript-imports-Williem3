import {person} from "./person";
import {greeting} from "./person";

console.log(person.firstName, person.lastName);


console.log(greeting(person.firstName));

export const salutations = greeting;