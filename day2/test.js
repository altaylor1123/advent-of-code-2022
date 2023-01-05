const calculateScore = require("./day2");
const calculateScore2 = require("./day2b");

describe("Calculate score", () => {
  it("returns 0 upon recieving an empty array", () => {
    expect(calculateScore([])).toBe(0);
  });
  it("returns the correct score for a single round", () => {
    expect(calculateScore(["A Y"])).toBe(8);
    expect(calculateScore(["B X"])).toBe(1);
    expect(calculateScore(["C Z"])).toBe(6);
  });
  it("returns the correct score for a series of rounds", () => {
    expect(calculateScore(["A Y", "B X", "C Z"])).toBe(15);
  });
});

describe("Calculate score part 2", () => {
  it("returns 0 upon recieving an empty array", () => {
    expect(calculateScore2([])).toBe(0);
  });
  it("returns the correct score for a single round", () => {
    expect(calculateScore2(["A Y"])).toBe(4);
    expect(calculateScore2(["B X"])).toBe(1);
    expect(calculateScore2(["C Z"])).toBe(7);
  });
  it("returns the correct score for a series of rounds", () => {
    expect(calculateScore2(["A Y", "B X", "C Z"])).toBe(12);
  });
});
