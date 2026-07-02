function Box({ title, value, color }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "25px",
        borderRadius: "18px",
        boxShadow: "0 8px 18px rgba(0,0,0,.08)",
        flex: 1,
      }}
    >
      <h4
        style={{
          color: "#777",
          marginBottom: "10px",
        }}
      >
        {title}
      </h4>

      <h1
        style={{
          color,
          fontSize: "34px",
        }}
      >
        {value}
      </h1>
    </div>
  );
}

function StatsCards({ tasks = [] }) {
  const total = tasks.length;
  const pending = tasks.filter((t) => t.status === "Pending").length;
  const progress = tasks.filter((t) => t.status === "In Progress").length;
  const completed = tasks.filter((t) => t.status === "Completed").length;

  return (
    <div
      style={{
        display: "flex",
        gap: "25px",
        margin: "35px 0",
      }}
    >
      <Box title="📋 Total" value={total} color="#2563EB" />
      <Box title="🟡 Pending" value={pending} color="#F59E0B" />
      <Box title="🚀 Progress" value={progress} color="#3B82F6" />
      <Box title="✅ Completed" value={completed} color="#22C55E" />
    </div>
  );
}

export default StatsCards;