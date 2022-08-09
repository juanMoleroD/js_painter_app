class PaintCan {
    constructor(capacityInLiters) {
        this.capacityInLiters = capacityInLiters;
        this.isEmpty = false;
    }
    empty() {
        this.isEmpty = true;
    }
}

module.exports = PaintCan;