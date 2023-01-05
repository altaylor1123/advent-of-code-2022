const fs = require("fs");
let rounds = fs.readFileSync("input.txt").toString().split(/\r?\n/);

const play1Map = { A: "rock", B: "paper", C: "scissors" };
const play2Map = { X: "lose", Y: "draw", Z: "win" };
const shapeScore = { rock: 1, paper: 2, scissors: 3 };
const winningShapes = { rock: "paper", paper: "scissors", scissors: "rock" };
const outcomeScore = { lost: 0, draw: 3, win: 6 };

function calculateScore2(rounds) {
  if (rounds.length === 0) return 0;
  const scores = [];

  for (let round of rounds) {
    const [play1, play2] = round.split(" ");
    const scoreSum = resolveRound(play1, play2);
    scores.push(scoreSum);
  }
  return scores.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}

const resolveRound = (play1, play2) => {
  if (play2Map[play2] === "win") {
    return (
      shapeScore[winningShapes[play1Map[play1]]] + outcomeScore[play2Map[play2]]
    );
  } else if (play2Map[play2] === "draw") {
    return shapeScore[play1Map[play1]] + outcomeScore[play2Map[play2]];
  } else {
    return (
      shapeScore[
        Object.keys(winningShapes).find(
          (key) => winningShapes[key] === play1Map[play1]
        )
      ] + 0
    );
  }
};

console.log(calculateScore2(rounds));
module.exports = calculateScore2;
