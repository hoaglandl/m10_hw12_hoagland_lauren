// YOUR CODE HERE

'use strict' ;

class Car {
    constructor(make, model, year) {
        this.make = "Honda";
        this.model = "Civic"
        this.year = 1998
    };

honk() {
    console.log('BEEP BEEP!');
};

function performMaintenance() {
    console.log('maintenance complete');

setTimeout(performMaintenance, 3000)};



let mySweetRide = new Car('Pontiac', 'Fiero', 1988);

honk(mySweetRide);

performMaintenance(mySweetRide);

};