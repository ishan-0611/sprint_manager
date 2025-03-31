const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { classifyFeedback, prioritizeTasks } = require("./models/mlModels");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let sprints = []; // Dummy data
let tasks = [];

app.get("/sprints", (req, res) => {console.log("postingg"); res.json(sprints)});
app.post("/sprints", (req, res) => {
  sprints.push(req.body);
  res.status(201).send("Sprint added");
});

app.post("/feedback", (req, res) => {
  console.log("testinggg");
  const result = classifyFeedback(req.body.feedback);
  res.json({ sentiment: result });
});

app.post("/tasks", (req, res) => {
  tasks.push(req.body);
  const prioritizedTasks = prioritizeTasks(tasks);
  res.json(prioritizedTasks);
});



app.listen(3000, () => console.log("Server running on port 3000"));
