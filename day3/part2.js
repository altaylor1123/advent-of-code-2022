const fs = require("fs");
let rucksacks = fs.readFileSync("input.txt").toString().split(/\r?\n/);

const groupRucksacksBy3 = (rucksacks) => {
  const grouped = [];
  let temp = [];
  rucksacks.forEach((element, index) => {
    if ((index + 1) % 3 === 0) {
      temp.push(element);
      grouped.push(temp);
      temp = [];
    } else {
      temp.push(element);
    }
  });
  return grouped;
};

const findCommon = (ruck1, ruck2, ruck3) => {
  const ruck1Array = Array.from(ruck1);
  const ruck2Array = Array.from(ruck2);
  const ruck3Array = Array.from(ruck3);
  const commonArray1 = ruck1Array.filter((item) => ruck2Array.includes(item));
  const commonArray2 = commonArray1.filter((item) => ruck3Array.includes(item));
  const commonItem = commonArray2[0];
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
  const groupedRucksacks = groupRucksacksBy3(rucksacks);
  const commons = groupedRucksacks.map((r) => findCommon(r[0], r[1], r[2]));
  const priorties = commons.map((p) => getPriority(p));
  return calculatePriortiesSum(priorties);
};

console.log(getPrioritySum(rucksacks));

module.exports = {
  groupRucksacksBy3,
  findCommon,
};
