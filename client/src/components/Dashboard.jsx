const [showForm, setShowForm] = useState(false);
import "../styles/dashboard.css";
import { useEffect, useState } from "react";
import API from "../services/api";

import Navbar from "./Navbar";
import StatsCards from "./StatsCards";
import SearchBar from "./SearchBar";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

return (
<div className="container">

     <Navbar setShowForm={setShowForm} />

      <StatsCards tasks={tasks} />

      <SearchBar />
{showForm && (
  <TaskForm
    fetchTasks={fetchTasks}
    editTask={editTask}
    setEditTask={setEditTask}
    setShowForm={setShowForm}
  />
)}
      <TaskList
        tasks={tasks}
        fetchTasks={fetchTasks}
        setEditTask={setEditTask}
      />

    </div>
  );
}

export default Dashboard;