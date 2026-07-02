function TaskCard({ task, onDelete, onEdit }) {
  return (
    <div className="taskCard">
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <div className="taskFooter">
        <span
          style={{
            background:
              task.priority === "High"
                ? "#fee2e2"
                : task.priority === "Medium"
                ? "#fef3c7"
                : "#dcfce7",
            color:
              task.priority === "High"
                ? "#dc2626"
                : task.priority === "Medium"
                ? "#ca8a04"
                : "#16a34a",
            padding: "6px 12px",
            borderRadius: "20px",
            fontWeight: "600",
          }}
        >
          🔥 {task.priority}
        </span>

        <span
          style={{
            background:
              task.status === "Completed"
                ? "#dcfce7"
                : task.status === "In Progress"
                ? "#dbeafe"
                : "#fef3c7",
            color:
              task.status === "Completed"
                ? "#16a34a"
                : task.status === "In Progress"
                ? "#2563eb"
                : "#ca8a04",
            padding: "6px 12px",
            borderRadius: "20px",
            fontWeight: "600",
          }}
        >
          📌 {task.status}
        </span>
      </div>

      <div className="actions">
        <button
          onClick={() => {
            onEdit(task);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          ✏ Edit
        </button>

        <button
          onClick={() => {
            if (window.confirm("Delete this task?")) {
              onDelete(task._id);
            }
          }}
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;