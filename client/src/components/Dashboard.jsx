import { useEffect, useState } from "react";
import API from "../services/api";

import Navbar from "./Navbar";
import StatsCards from "./StatsCards";
import SearchBar from "./SearchBar";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
const [search, setSearch] = useState("");
const [statusFilter, setStatusFilter] = useState("All");
const [editTask, setEditTask] = useState(null);
const [showForm, setShowForm] = useState(false);
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
  const filteredTasks = tasks.filter((task) => {
  const matchesSearch =
    task.title.toLowerCase().includes(search.toLowerCase()) ||
    task.description.toLowerCase().includes(search.toLowerCase());

  const matchesStatus =
    statusFilter === "All" || task.status === statusFilter;

  return matchesSearch && matchesStatus;
});

 return (
  <div>
<Navbar setShowForm={setShowForm} />
  <div className="container">

      <StatsCards tasks={tasks} />
<SearchBar
  search={search}
  setSearch={setSearch}
  statusFilter={statusFilter}
  setStatusFilter={setStatusFilter}
/>
   {showForm && (
  <TaskForm
    fetchTasks={fetchTasks}
    editTask={editTask}
    setEditTask={setEditTask}
    setShowForm={setShowForm}
  />
)}

      <TaskList
        tasks={filteredTasks}
        fetchTasks={fetchTasks}
        setEditTask={setEditTask}
      />

    </div>

  </div>
);
}

export default Dashboard;