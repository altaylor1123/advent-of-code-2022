const fs = require("fs");
let assignments = fs.readFileSync("input.txt").toString().split(/\r?\n/);

const extractBounds = (assignment) => {
  const boundsStrings = assignment.match(/[0-9]{1,2}/g);
  const boundsInts = boundsStrings.map((b) => parseInt(b));
  return boundsInts;
};

const isPartiallyContained = (bounds) => {
  const range1 = range(bounds[0], bounds[1]);
  const range2 = range(bounds[2], bounds[3]);

  return range1.some((r) => range2.includes(r));
};

function range(start, end) {
  var ans = [];
  for (let i = start; i <= end; i++) {
    ans.push(i);
  }
  return ans;
}

const getContainedCount = (containedList) => {
  const count = containedList.reduce((acc, curr) => {
    return curr ? acc + 1 : acc;
  }, 0);
  return count;
};

const getAssignemntContainedCount = (assignments) => {
  const bounds = assignments.map((a) => extractBounds(a));
  const containedList = bounds.map((b) => isPartiallyContained(b));
  const count = getContainedCount(containedList);
  return count;
};

console.log(getAssignemntContainedCount(assignments));
module.exports = { extractBounds, isPartiallyContained, getContainedCount };
