function StatsCards({ tasks = [] }) {
  const total = tasks.length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const progress = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const cards = [
    {
      icon: "📋",
      title: "Total Tasks",
      value: total,
      color: "#2563eb",
    },
    {
      icon: "⏳",
      title: "Pending",
      value: pending,
      color: "#f59e0b",
    },
    {
      icon: "🚀",
      title: "In Progress",
      value: progress,
      color: "#3b82f6",
    },
    {
      icon: "✅",
      title: "Completed",
      value: completed,
      color: "#22c55e",
    },
  ];

  return (
    <div className="stats">
      {cards.map((card) => (
        <div className="card" key={card.title}>
          <div
            className="cardIcon"
            style={{ background: card.color }}
          >
            {card.icon}
          </div>

          <h3>{card.title}</h3>

          <h1>{card.value}</h1>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;