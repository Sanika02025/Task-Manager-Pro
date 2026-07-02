import TaskCard from "./TaskCard";

function TaskList({ tasks, fetchTasks, setEditTask }) {
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
    <div>
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onDelete={async (id) => {
            await fetchTasks();
          }}
          onEdit={setEditTask}
        />
      ))}
    </div>
  );
}

export default TaskList;