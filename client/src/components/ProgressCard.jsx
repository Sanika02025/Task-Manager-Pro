function ProgressCard({ tasks }) {
  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const percentage =
    total === 0 ? 0 : Math.round((completed / total) * 100);

 return (
  <div className="progressCard">
    <div className="progressHeader">
      <div>
        <h2>📈 Progress Overview</h2>
        <p>{completed} of {total} tasks completed</p>
      </div>

      <div className="progressPercent">
        {percentage}%
      </div>
    </div>

    <div className="progressBar">
      <div
        className="progressFill"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>

    <div className="progressMessage">
      {percentage === 100
        ? "🎉 Excellent! All tasks completed."
        : percentage >= 70
        ? "🔥 Great progress! Keep it up."
        : percentage >= 40
        ? "💪 You're doing well."
        : "🚀 Let's complete a few more tasks!"}
    </div>
  </div>
);
}
export default ProgressCard;