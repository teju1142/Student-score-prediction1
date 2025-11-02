function predictScore() {
  // Get input value
  let hours = parseFloat(document.getElementById('hours').value);

  // Simple linear regression equation: Score = 5 + 9.5 * hours
  if (isNaN(hours) || hours < 0) {
    document.getElementById('result').innerText = "⚠️ Please enter a valid number of hours.";
    return;
  }

  let predictedScore = 5 + 9.5 * hours;

  // Limit score between 0 and 100
  if (predictedScore > 100) predictedScore = 100;

  document.getElementById('result').innerText = `📊 Predicted Score: ${predictedScore.toFixed(2)}%`;
}
