const tail = require('../tail');
const assert = require('chai').assert;


describe('#tail', () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello',' Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]),["Lighthouse", "Labs"]);
  });
  it("returns 3 for the length of ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(["Yo Yo", "Lighthouse", "Labs"].length, 3);
  });
  it("returns 0 for the length of result of []", () => {
    assert.strictEqual(tail([]).length, 0);
  });
  it("returns 0 for the length of result of [1]", () => {
    assert.strictEqual(tail([1]).length, 0);
  });
});

