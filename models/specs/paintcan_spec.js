const assert = require('assert');
const PaintCan = require('../paintcan');

describe("Paint Can", function(){
    let paintCan;

    this.beforeEach(function() {
        paintCan = new PaintCan(4); 
    });

    it("should have a number of liters", function() {
        const actual = paintCan.capacityInLiters;
        assert.strictEqual(actual, 4);
    });

    it("should start full", function() {
        const actual = paintCan.isEmpty;
        assert.strictEqual(actual, false );
    });

    it("should be able to empty itself", function() {
        paintCan.empty();
        const actual = paintCan.isEmpty;
        assert.strictEqual(actual, true);
    })

} );