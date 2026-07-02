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

  return (
    <div className="stats">

      <div className="card">
        <h3>Total</h3>
        <h1>{total}</h1>
      </div>

      <div className="card">
        <h3>Pending</h3>
        <h1>{pending}</h1>
      </div>

      <div className="card">
        <h3>In Progress</h3>
        <h1>{progress}</h1>
      </div>

      <div className="card">
        <h3>Completed</h3>
        <h1>{completed}</h1>
      </div>

    </div>
  );
}

export default StatsCards;