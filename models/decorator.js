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
            room.applyPaint()
        }
    }

}





module.exports = Decorator;