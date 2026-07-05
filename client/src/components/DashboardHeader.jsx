function DashboardHeader({ tasks }) {
  const completed = tasks.filter(
    (t) => t.status === "Completed"
  ).length;

  return (
    <div className="dashboardHeader">
      <div>
        <h1>Welcome back, Sanika 👋</h1>
        <p>
          You have <strong>{tasks.length}</strong> tasks,
          with <strong>{completed}</strong> completed.
        </p>
      </div>
    </div>
  );
}

export default DashboardHeader;