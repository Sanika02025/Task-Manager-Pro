import API from "../services/api";
import TaskCard from "./TaskCard";

function TaskList({ tasks, fetchTasks, setEditTask }) {

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };

  if (!tasks || tasks.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "50px",
          color: "#666",
        }}
      >
        <h2>📭 No Tasks Found</h2>
        <p>Create your first task to get started 🚀</p>
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