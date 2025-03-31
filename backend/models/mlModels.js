const natural = require("natural");
const classifier = new natural.BayesClassifier();

const trainingData = [
  { text: "great job", label: "positive" },
  { text: "well done", label: "positive" },
  { text: "needs improvement", label: "negative" },
  { text: "not happy", label: "negative" },
];

trainingData.forEach(({ text, label }) => classifier.addDocument(text, label));
classifier.train();

function classifyFeedback(feedback) {
  return classifier.classify(feedback);
}

function prioritizeTasks(tasks) {
  return tasks.sort((a, b) => (a.priority === "High" ? -1 : 1));
}

module.exports = { classifyFeedback, prioritizeTasks };
