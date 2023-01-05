const {
  seperateRucksack,
  findCommon,
  getPriority,
  calculatePriortiesSum,
  getPrioritySum,
} = require("../part1");

describe("seperateRucksack", () => {
  it("returns two equal compartment strings", () => {
    expect(seperateRucksack("vJrwpWtwJgWrhcsFMMfFFhFp")).toEqual([
      "vJrwpWtwJgWr",
      "hcsFMMfFFhFp",
    ]);
  });
});

describe("findCommon", () => {
  it("returns the common element from two strings", () => {
    expect(findCommon("vJrwpWtwJgWr", "hcsFMMfFFhFp")).toBe("p");
  });
});

describe("getPriority", () => {
  it("returns the priorty value of the char", () => {
    expect(getPriority("a")).toBe(1);
    expect(getPriority("A")).toBe(27);
    expect(getPriority("z")).toBe(26);
    expect(getPriority("Z")).toBe(52);
  });
});

describe("calculatePriortiesSum", () => {
  it("returns the sum of a list of priorties", () => {
    expect(calculatePriortiesSum([16, 38, 42, 22, 20, 19])).toBe(157);
  });
});

describe("getPrioritySum", () => {
  it("returns the sum of a list of rucksacks", () => {
    expect(
      getPrioritySum([
        "vJrwpWtwJgWrhcsFMMfFFhFp",
        "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
        "PmmdzqPrVvPwwTWBwg",
        "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
        "ttgJtRGJQctTZtZT",
        "CrZsJsPPZsGzwwsLwLmpwMDw",
      ])
    ).toBe(157);
  });
});
