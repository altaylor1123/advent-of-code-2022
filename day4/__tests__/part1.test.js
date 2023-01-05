const {
  extractBounds,
  isFullyContained,
  getContainedCount,
} = require("../part1");

describe("extractBounds", () => {
  it("returns an array of bounds - integers", () => {
    expect(extractBounds("2-4,6-8")).toEqual([2, 4, 6, 8]);
    expect(extractBounds("34-82,33-81")).toEqual([34, 82, 33, 81]);
  });
});

describe("isFullyContained", () => {
  it("returns an boolean of true if an assignment is fully contained in another", () => {
    expect(isFullyContained([2, 8, 3, 7])).toBe(true);
    expect(isFullyContained([3, 7, 2, 8])).toBe(true);
    expect(isFullyContained([6, 6, 4, 6])).toBe(true);
    expect(isFullyContained([6, 6, 6, 6])).toBe(true);
  });
  it("returns an boolean of false if an assignment is not fully contained in another", () => {
    expect(isFullyContained([2, 4, 6, 8])).toBe(false);
    expect(isFullyContained([2, 3, 4, 5])).toBe(false);
    expect(isFullyContained([5, 7, 7, 9])).toBe(false);
    expect(isFullyContained([2, 6, 4, 8])).toBe(false);
  });
});

describe("getContainedCount", () => {
  it("returns count of true values in array", () => {
    expect(getContainedCount([true, true, false, true])).toBe(3);
  });
});
