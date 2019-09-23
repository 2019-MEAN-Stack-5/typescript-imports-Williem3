"use strict";
exports.__esModule = true;
var human = /** @class */ (function () {
    function human(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return human;
}());
exports.human = human;
exports.person = new human("John", "Doe");
exports.greeting = "Nice to meet you, " + exports.person.firstName + ".";
