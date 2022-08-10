const assert = require('assert');
const { isReadable } = require('stream');
const Decorator = require("../decorator");
const PaintCan = require("../paintcan");
const Room = require('../room');

describe("decorator", function () {
    let decorator;
    let decorator2;
    let paintCan;
    let paintCan2;
    let room;
    let room2

    this.beforeEach(function () {
        decorator = new Decorator();
        decorator2 = new Decorator();
        paintCan = new PaintCan(4);
        paintCan2 = new PaintCan(6);
        decorator2.addPaint(paintCan2);
        room = new Room(4);
        room2 = new Room(10);
    });

    it("should start with an empty stock", function () {
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    });

    it("should be able to count the stock amount", function () {
        const actual = decorator.stockAmount();
        assert.strictEqual(actual, 0);
    });

    it("should be able to add a can of paint", function () {
        decorator.addPaint();
        const actual = decorator.stockAmount();
        assert.strictEqual(actual, 1);
    });

    it("should be able to calculate the liters of paint available", function () {
        decorator.addPaint(paintCan);
        decorator.addPaint(paintCan2)
        const actual = decorator.calculateTotalPaintLiters();
        assert.strictEqual(actual, 10);
    });

    it("should check if it has enough paint for a room", function () {
        const actual1 = decorator2.checkIfEnoughPaint(room);
        const actual2 = decorator2.checkIfEnoughPaint(room2);
        assert.strictEqual(actual1, true);
        assert.strictEqual(actual2, false);
    });

    it("should paint a room if enough paint", function () {
        decorator2.paintRoom2(room);
        assert.strictEqual(room.isPainted, true);
        decorator.paintRoom2(room2);
        assert.strictEqual(room2.isPainted, false);
    })

    it("should decrease its stock when they paint a room", function () {
        decorator2.paintRoom2(room);
        const actual = decorator2.calculateTotalPaintLiters();
        assert.strictEqual(actual, 2);
    })
});
