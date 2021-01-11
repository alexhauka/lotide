const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {

  it("should return ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse, 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });

  it("should leave the original array intact", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"]);
  });

  it("should return an array with length 1 shorter than original (e.g. 3 -> 2)", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.deepEqual(result.length, 2);
  });
  it("should return 'Lighthouse' for element 0", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.deepEqual(result[0], 'Lighthouse');
  });
});