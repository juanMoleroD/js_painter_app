const assert = require('assert');
const decorator = require("../decorator");

describe("decorator", function () {
    let decorator;
    this.beforeEach(function() {
        decorator = new decorator();
    })

    it("should start with an empty stock", function () {
        const actual = decorator.stock;
        assert.strictEqual(actual, []);
    })


});
