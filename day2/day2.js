const fs = require("fs");
let rounds = fs.readFileSync("input.txt").toString().split(/\r?\n/);

const play1Map = { A: "rock", B: "paper", C: "scissors" };
const play2Map = { X: "rock", Y: "paper", Z: "scissors" };
const shapeScore = { rock: 1, paper: 2, scissors: 3 };
const outcomeScore = { lost: 0, draw: 3, won: 6 };

function calculateScore(rounds) {
  if (rounds.length === 0) return 0;
  const scores = [];

  for (let round of rounds) {
    const [play1, play2] = round.split(" ");
    const scoreSum = shapeScore[play2Map[play2]] + resolveRound(play1, play2);
    scores.push(scoreSum);
  }
  return scores.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}

const resolveRound = (play1, play2) => {
  if (
    (play2Map[play2] === "rock" && play1Map[play1] === "scissors") ||
    (play2Map[play2] === "scissors" && play1Map[play1] === "paper") ||
    (play2Map[play2] === "paper" && play1Map[play1] === "rock")
  ) {
    return outcomeScore["won"];
  } else if (play2Map[play2] === play1Map[play1]) {
    return outcomeScore["draw"];
  } else {
    return outcomeScore["lost"];
  }
};

console.log(calculateScore(rounds));
module.exports = calculateScore;
