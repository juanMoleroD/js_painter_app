class Room {
    constructor(area) {
        this.area = area;
        this.isPainted = false;
    }
    applyPaint() {
        this.isPainted = true;
    }
}

module.exports = Room;