const getPriorityStyle = (priority) => {
  switch (priority) {
    case "High":
      return {
        background: "#FEE2E2",
        color: "#DC2626",
      };

    case "Medium":
      return {
        background: "#FEF3C7",
        color: "#CA8A04",
      };

    default:
      return {
        background: "#DCFCE7",
        color: "#15803D",
      };
  }
};

const getStatusStyle = (status) => {
  switch (status) {
    case "Completed":
      return {
        background: "#DCFCE7",
        color: "#15803D",
      };

    case "In Progress":
      return {
        background: "#DBEAFE",
        color: "#2563EB",
      };

    default:
      return {
        background: "#FEF3C7",
        color: "#CA8A04",
      };
  }
};

function TaskCard({ task, onDelete, onEdit }) {
  return (
<div className="taskCard">
      <h2 className="taskTitle">
  {task.title}
</h2>
<p
  className={
    task.dueDate &&
    new Date(task.dueDate) < new Date() &&
    task.status !== "Completed"
      ? "dueDate overdue"
      : "dueDate"
  }
>
  📅{" "}
  {task.dueDate
    ? new Date(task.dueDate).toLocaleDateString()
    : "No Due Date"}
</p>
<div className="taskFooter">
        <span
          style={{
            padding: "8px 16px",
            borderRadius: "30px",
            background:
              task.priority === "High"
                ? "#FEE2E2"
                : task.priority === "Medium"
                ? "#FEF3C7"
                : "#DCFCE7",
            color:
              task.priority === "High"
                ? "#DC2626"
                : task.priority === "Medium"
                ? "#B45309"
                : "#15803D",
            fontWeight: "600",
          }}
        >
          🔥 {task.priority}
        </span>

        <span
          style={{
            padding: "8px 16px",
            borderRadius: "30px",
            background:
              task.status === "Completed"
                ? "#DCFCE7"
                : task.status === "In Progress"
                ? "#DBEAFE"
                : "#FEF3C7",
            color:
              task.status === "Completed"
                ? "#15803D"
                : task.status === "In Progress"
                ? "#2563EB"
                : "#B45309",
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
  }}
>
  ✏ Edit
</button>
       <button onClick={() => onDelete(task._id)}>
  🗑 Delete
</button>
      </div>
    </div>
  );
}

export default TaskCard;