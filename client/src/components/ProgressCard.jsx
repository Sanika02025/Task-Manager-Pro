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

        <h2>📈 Progress Overview</h2>

        <div className="progressPercent">
          {percentage}%
        </div>

      </div>

      <div className="progressBar">

        <div
          className="progressFill"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <p className="progressText">
        {completed} of {total} tasks completed
      </p>

      <p className="progressMessage">
        {percentage === 100
          ? "🎉 Amazing! Everything is complete."
          : percentage >= 70
          ? "🔥 Great progress!"
          : percentage >= 40
          ? "💪 Keep going!"
          : "🚀 Let's start completing tasks!"}
      </p>

    </div>
  );
}

export default ProgressCard;