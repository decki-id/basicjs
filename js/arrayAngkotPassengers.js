let passenger = [];

let addPassenger = function (passengerName, passenger) {
    if (passenger.length == 0) {
        passenger.push(passengerName);
        return passenger;
    } else {
        for (let a = 0; a < passenger.length; a++) {
            if (passenger[a] == undefined) {
                passenger[a] = passengerName;
                return passenger;
            } else if (passenger[a] == passengerName) {
                console.log(passengerName + ' is already inside the god damn angkot!');
                return passenger;
            } else if (a == passenger.length - 1) {
                passenger.push(passengerName);
                return passenger;
            }
        }
    }
}

let deletePassenger = function (passengerName, passenger) {
    if (passenger.length == 0) {
        console.log('The angkot is empty.');
        return passenger;
    } else {
        for (let i = 0; i < passenger.length; i++) {
            if (passenger[i] == passengerName) {
                passenger[i] = undefined;
                return passenger;
            } else if (i == passenger.length - 1) {
                console.log(passengerName + ' is not in the god damn angkot!');
                return passenger;
            }
        }
    }
}