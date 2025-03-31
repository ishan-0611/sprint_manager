import { useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then(setTasks);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <button onClick={() => addTask({ name: "New Task", priority: "High" })}>
        Add Task
      </button>
      {tasks.map((task, index) => (
        <div key={index}>{task.name}</div>
      ))}
    </div>
  );
}

export default Tasks;
