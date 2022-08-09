const assert = require('assert');
const Room = require('../room.js');

describe ("Room", function() {
    
    let room;

    this.beforeEach(function(){
        room = new Room(30);
    })

    it("should have an area in square meters", function() {
        const actual = room.area;
        assert.strictEqual(actual, 30);
    });

    it("should start unpainted", function() {
        const actual = room.isPainted;
        assert.strictEqual(actual, false) 
    })

    it("should allow to be painted", function() {
        room.applyPaint();
        const actual = room.isPainted;
        assert.strictEqual(actual, true);
    })

})