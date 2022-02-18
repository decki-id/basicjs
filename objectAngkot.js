function Angkot(driverName, route, passenger, cash) {
    this.driverName = driverName;
    this.route = route;
    this.passenger = passenger;
    this.cash = cash;
    this.passengerGoUp = function (passengerName) {
        this.passenger.push(passengerName);
        return this.passenger;
    }
    this.passengerDropOff = function (passengerName, pay) {
        if (this.passenger.length === 0) {
            return console.log('The angkot is empty!');
        }
        for (var i = 0; i < this.passenger.length; i++) {
            if (this.passenger[i] == passengerName) {
                this.passenger[i] = undefined;
                this.cash += pay;
                return this.passenger;
            }
        }
    }
}
var angkot1 = new Angkot("Sandhika Galih", ["Cicaheum", "Cibiru"], [], 0);
var angkot2 = new Angkot("Michael Jagger", ["Antapani", "Ciroyom"], [], 0);