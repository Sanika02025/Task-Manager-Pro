function TaskCard({ task, onDelete, onEdit }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "22px",
        marginBottom: "20px",
        boxShadow: "0 8px 20px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          marginBottom: "10px",
          color: "#222",
        }}
      >
        {task.title}
      </h2>

      <p
        style={{
          color: "#666",
          marginBottom: "20px",
        }}
      >
        {task.description}
      </p>

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
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

      <div
        style={{
          display: "flex",
          gap: "12px",
        }}
      >
        <button
          onClick={() => onEdit(task)}
          style={{
            background: "#2563EB",
            color: "#fff",
            border: "none",
            padding: "10px 18px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          ✏ Edit
        </button>

        <button
          onClick={() => onDelete(task._id)}
          style={{
            background: "#EF4444",
            color: "#fff",
            border: "none",
            padding: "10px 18px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;