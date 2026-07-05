import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import API from "../services/api";

function TaskForm({
fetchTasks,
editTask,
setEditTask,
setShowForm
}){
const [task,setTask]=useState({
title:"",
description:"",
status:"Pending",
priority:"Medium",
category:"Personal",
dueDate:"",
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
  dueDate: "",
});
fetchTasks();

toast.success(
  editTask
    ? "Task updated successfully!"
    : "Task added successfully!"
);

setShowForm(false);
    } catch (err) {
      toast.error("Something went wrong!");
console.log(err);
    }
  };

return (
  <form className="taskForm" onSubmit={handleSubmit}>
<h2
  style={{
    marginBottom: "20px",
    color: "#2563eb",
  }}
>
  {editTask ? "Edit Task" : "Create New Task"}
</h2>
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
      rows="4"
      value={task.description}
      onChange={handleChange}
    />
    <input
  type="date"
  name="dueDate"
  value={task.dueDate}
  onChange={handleChange}
/>
    <div className="formRow">

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
    name="category"
    value={task.category}
    onChange={handleChange}
>
    <option>Personal</option>
    <option>Work</option>
    <option>Study</option>
    <option>Shopping</option>
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

    </div>

    <button type="submit">
      {editTask ? "Update Task" : "Add Task"}
    </button>

  </form>
);
}
export default TaskForm;