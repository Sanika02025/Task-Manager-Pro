import API from "../services/api";
import TaskCard from "./TaskCard";
import toast from "react-hot-toast";

function TaskList({ tasks, fetchTasks, setEditTask }) {

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      fetchTasks();
      toast.success("Task Deleted Successfully!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete task!");
    }
  };
if (!tasks || tasks.length === 0) {
  return (
    <div className="emptyState">
      <div className="emptyIcon">📝</div>

      <h2>No Tasks Yet</h2>

      <p>
        Create your first task and start organizing your day.
      </p>
    </div>
  );
}
  return (
    <div className="taskGrid">
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onDelete={deleteTask}
          onEdit={setEditTask}
        />
      ))}
    </div>
  );
}

export default TaskList;