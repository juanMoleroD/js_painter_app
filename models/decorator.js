class Decorator {
    constructor() {
        this.stock = [];
    }
    stockAmount() {
        return this.stock.length;
    }
    addPaint(paint) {
        this.stock.push(paint)
    }
    calculateTotalPaintLiters() {
        let total = 0;
        for (let can of this.stock) {
            total += can.capacityInLiters;
        }
        return total;
    }
    checkIfEnoughPaint(room) {
        if (this.calculateTotalPaintLiters() >= room.area) {
            return true;
        } else {
            return false;
        }
    }
    paintRoom(room) { //this function should be further broken down, done below.
        if (this.checkIfEnoughPaint(room)) {
            let paintNeeded = room.area;
            let numberOfCansToRemove = 0;
            for (let [index, can] of this.stock.entries()) {
                if (paintNeeded >= can.capacityInLiters) {
                    paintNeeded -= can.capacityInLiters;
                    numberOfCansToRemove++;
                } else {
                    can.capacityInLiters -= paintNeeded;
                    paintNeeded = 0;
                    break;
                }
            }
            this.stock.splice(0, numberOfCansToRemove)
            room.applyPaint()
        }
    }
    paintRoom2(room) {
        if (this.checkIfEnoughPaint(room)) {
            let paintNeeded = room.area;
            for (let can of this.stock) {
                if (paintNeeded >= can.capacityInLiters) {
                    paintNeeded -= can.capacityInLiters;
                    can.empty();
                } else {
                    can.capacityInLiters -= paintNeeded;
                    paintNeeded = 0
                    break;
                }
            }
            room.applyPaint();
            this.removeEmptyPaintCans();
        }
    }
    removeEmptyPaintCans() {
        let remainingCans = [];
        for (let can of this.stock) {
            if (!can.isEmpty) {
                remainingCans.push(can);
            }
        }
        this.stock = remainingCans;
    }

}

module.exports = Decorator;