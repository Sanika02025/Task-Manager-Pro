import { useEffect, useState } from "react";
import API from "../services/api";
import ProgressCard from "./ProgressCard";

import TaskChart from "./TaskChart";
import DashboardHeader from "./DashboardHeader";
import "../styles/Dashboard.css";
import Modal from "./Modal";
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
const [sortBy, setSortBy] = useState("Newest");
const [loading, setLoading] = useState(true);

const fetchTasks = async () => {
  try {
    setLoading(true);
    const res = await API.get("/tasks");
    setTasks(res.data.data);
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchTasks();
  }, []);
const filteredTasks = tasks
  .filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      task.status === statusFilter;

    return matchesSearch && matchesStatus;
  })
  .sort((a, b) => {
    switch (sortBy) {
      case "Oldest":
        return new Date(a.createdAt) - new Date(b.createdAt);

      case "Priority": {
        const priority = {
          High: 3,
          Medium: 2,
          Low: 1,
        };
        return priority[b.priority] - priority[a.priority];
      }

      case "Due Date":
        return new Date(a.dueDate || 0) - new Date(b.dueDate || 0);

      default:
        return new Date(b.createdAt) - new Date(a.createdAt);
    }
  });

 return (
  <div>
<Navbar setShowForm={setShowForm} />

  <div className="container">
<DashboardHeader tasks={tasks} />

<StatsCards tasks={tasks} />

<div className="analyticsSection">
  <TaskChart tasks={tasks} />
  <ProgressCard tasks={tasks} />
</div>

<SearchBar
  search={search}
  setSearch={setSearch}
  statusFilter={statusFilter}
  setStatusFilter={setStatusFilter}
  sortBy={sortBy}
  setSortBy={setSortBy}
/>
   {showForm && (
  <Modal onClose={() => setShowForm(false)}>
    <TaskForm
      fetchTasks={fetchTasks}
      editTask={editTask}
      setEditTask={setEditTask}
      setShowForm={setShowForm}
    />
  </Modal>
)}
{loading ? (
  <div className="floatingBtn">
   <div className="spinner"></div>
  </div>
) : (
<TaskList
  tasks={filteredTasks}
  fetchTasks={fetchTasks}
  setEditTask={(task) => {
    setEditTask(task);
    setShowForm(true);
  }}
/>
)}
  </div>

  </div>
);
}
<button
  onClick={() => setShowForm(true)}
  style={{
    position: "fixed",
    right: "30px",
    bottom: "30px",
    background: "#2563eb",
    color: "white",
    border: "none",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    fontSize: "30px",
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(0,0,0,.3)",
  }}
>
  +
</button>
export default Dashboard;