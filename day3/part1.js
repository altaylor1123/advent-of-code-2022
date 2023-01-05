const fs = require("fs");
let rucksacks = fs.readFileSync("input.txt").toString().split(/\r?\n/);

const seperateRucksack = (rucksackString) => {
  const firstSack = rucksackString.slice(0, rucksackString.length / 2);
  const secondSack = rucksackString.slice(
    rucksackString.length / 2,
    rucksackString.length + 1
  );

  return [firstSack, secondSack];
};

const findCommon = (ruck1, ruck2) => {
  const ruck1Array = Array.from(ruck1);
  const ruck2Array = Array.from(ruck2);
  const commonArray = ruck1Array.filter((item) => ruck2Array.includes(item));
  const commonItem = commonArray[0];
  return commonItem;
};

const getPriority = (char) => {
  return char.charCodeAt(0) > 90
    ? char.charCodeAt(0) - 96
    : char.charCodeAt(0) - 38;
};

const calculatePriortiesSum = (priorties) => {
  return priorties.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};

const getPrioritySum = (rucksacks) => {
  const seperatedRucksacks = rucksacks.map((r) => seperateRucksack(r));
  const commons = seperatedRucksacks.map((r) => findCommon(r[0], r[1]));
  const priorties = commons.map((p) => getPriority(p));
  return calculatePriortiesSum(priorties);
};

console.log(getPrioritySum(rucksacks));

module.exports = {
  seperateRucksack,
  findCommon,
  getPriority,
  calculatePriortiesSum,
  getPrioritySum,
};
