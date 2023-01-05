const fs = require("fs");
let assignments = fs.readFileSync("input.txt").toString().split(/\r?\n/);

const extractBounds = (assignment) => {
  const boundsStrings = assignment.match(/[0-9]{1,2}/g);
  const boundsInts = boundsStrings.map((b) => parseInt(b));
  return boundsInts;
};

const isFullyContained = (bounds) => {
  if (bounds[0] <= bounds[2] && bounds[1] >= bounds[3]) {
    return true;
  } else if (bounds[0] >= bounds[2] && bounds[1] <= bounds[3]) {
    return true;
  } else {
    return false;
  }
};

const getContainedCount = (containedList) => {
  const count = containedList.reduce((acc, curr) => {
    return curr ? acc + 1 : acc;
  }, 0);
  return count;
};

const getAssignemntContainedCount = (assignments) => {
  const bounds = assignments.map((a) => extractBounds(a));
  const containedList = bounds.map((b) => isFullyContained(b));
  const count = getContainedCount(containedList);
  return count;
};

console.log(getAssignemntContainedCount(assignments));
module.exports = { extractBounds, isFullyContained, getContainedCount };
