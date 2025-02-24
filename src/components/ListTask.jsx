import { useSelector } from "react-redux";
import { useState } from "react";
import Task from "./Task";

const ListTask = () => {
  const tasks = useSelector((state) => state.todos.tasks);
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.isDone;
    if (filter === "not done") return !task.isDone;
    return true;
  });

  return (
    <div>
      <h2>Task List</h2>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="not done">Not Done</option>
      </select>

      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
