import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todoSlice";
import { nanoid } from "nanoid";

const AddTask = () => {
  const [taskDescription, setTaskDescription] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskDescription.trim() === "") return;
    dispatch(
      addTask({
        id: nanoid(),
        description: taskDescription,
        isDone: false,
      })
    );
    setTaskDescription("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
