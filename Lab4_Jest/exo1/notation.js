const mean = (scores)=>{
    if (!Array.isArray(scores) || scores.length === 0) {
    throw new Error("mean() expects a non-empty array of numbers");
  }

  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

module.exports = mean;