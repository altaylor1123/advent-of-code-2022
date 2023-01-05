const fs = require("fs");
let contents = fs.readFileSync("input.txt").toString().split(/\r?\n/);

function compareNumbers(a, b) {
  return b - a;
}

const getMaxValue = (contents) => {
  let totals = [];
  let total = 0;
  contents.forEach((val) => {
    if (val === "") {
      totals.push(total);
      total = 0;
    } else {
      total += parseInt(val);
    }
  });
  const sorted = totals.sort(compareNumbers);
  return sorted.slice(0, 3);
};
console.log(getMaxValue(contents));
console.log(
  getMaxValue(contents).reduce((acc, currentVal) => {
    return acc + currentVal;
  }, 0)
);
