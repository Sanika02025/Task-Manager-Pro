import { useEffect, useState } from "react";
import API from "../services/api";

function TaskForm({
fetchTasks,
editTask,
setEditTask,
setShowForm
}){
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "Pending",
    priority: "Medium",
  });

  useEffect(() => {
    if (editTask) {
      setTask(editTask);
    }
  }, [editTask]);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editTask) {
        await API.put(`/tasks/${editTask._id}`, task);
        setEditTask(null);
      } else {
        await API.post("/tasks", task);
      }

      setTask({
        title: "",
        description: "",
        status: "Pending",
        priority: "Medium",
      });

      fetchTasks();
      setShowForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        name="title"
        placeholder="Task Title"
        value={task.title}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
      />

      <select
        name="priority"
        value={task.priority}
        onChange={handleChange}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <select
        name="status"
        value={task.status}
        onChange={handleChange}
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <button type="submit">
        {editTask ? "Update Task" : "Add Task"}
      </button>

    </form>
  );
}

export default TaskForm;