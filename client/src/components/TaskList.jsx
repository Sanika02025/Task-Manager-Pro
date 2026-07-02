import API from "../services/api";
import toast from "react-hot-toast";
import TaskCard from "./TaskCard";

function TaskList({ tasks, fetchTasks, setEditTask }) {

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);

toast.success("Task Deleted!");

fetchTasks();
    } catch (err) {
     toast.error("Unable to delete task");
console.log(err);
    }
  };

  return (
    <div className="taskGrid">

      {tasks.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>
          No Tasks Found
        </h2>
      ) : (
        tasks.map((task) => (
         <TaskCard
    key={task._id}
    task={task}
    onDelete={deleteTask}
    onEdit={setEditTask}
/>
        ))
      )}

    </div>
  );
}

export default TaskList;