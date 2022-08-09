class Decorator {
    constructor () {
        this.stock = [];
    }
    stockAmount() {
        return this.stock.length;
    }
    addPaint (paint) {
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
    paintRoom(room) {
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

}





module.exports = Decorator;