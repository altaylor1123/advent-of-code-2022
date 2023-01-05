const { isPartiallyContained } = require("../part2");

describe("isPartiallyContained", () => {
  it("returns an boolean of true if an assignment is fully contained in another", () => {
    expect(isPartiallyContained([5, 7, 7, 9])).toBe(true);
    expect(isPartiallyContained([7, 9, 5, 7])).toBe(true);
    expect(isPartiallyContained([2, 8, 3, 7])).toBe(true);
    expect(isPartiallyContained([3, 7, 2, 8])).toBe(true);
    expect(isPartiallyContained([6, 6, 4, 6])).toBe(true);
    expect(isPartiallyContained([4, 6, 6, 6])).toBe(true);
    expect(isPartiallyContained([2, 6, 4, 8])).toBe(true);
    expect(isPartiallyContained([4, 8, 2, 6])).toBe(true);
  });
  it("returns an boolean of false if an assignment is not fully contained in another", () => {
    expect(isPartiallyContained([2, 6, 8, 8])).toBe(false);
    expect(isPartiallyContained([8, 8, 2, 6])).toBe(false);
    expect(isPartiallyContained([2, 4, 6, 8])).toBe(false);
    expect(isPartiallyContained([6, 8, 2, 4])).toBe(false);
    expect(isPartiallyContained([2, 3, 4, 5])).toBe(false);
    expect(isPartiallyContained([4, 5, 2, 3])).toBe(false);
  });
});
