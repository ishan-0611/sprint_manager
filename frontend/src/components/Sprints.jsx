import { useState, useEffect } from "react";

function Sprints() {
  const [sprints, setSprints] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/sprints")
      .then((res) => res.json())
      .then(setSprints);
  }, []);

  return (
    <div>
      <h1>Sprints</h1>
      {sprints.map((sprint) => (
        <div key={sprint.id}>{sprint.name}</div>
      ))}
    </div>
  );
}

export default Sprints;
