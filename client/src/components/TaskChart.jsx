import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

function TaskChart({ tasks }) {
  const data = [
    {
      name: "Completed",
      value: tasks.filter((t) => t.status === "Completed").length,
    },
    {
      name: "Pending",
      value: tasks.filter((t) => t.status === "Pending").length,
    },
    {
      name: "In Progress",
      value: tasks.filter((t) => t.status === "In Progress").length,
    },
  ];

  const COLORS = ["#22c55e", "#f59e0b", "#2563eb"];

  return (
    <div className="chartCard">
      <h2>📊 Task Distribution</h2>

      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
         <Pie
data={data}
dataKey="value"
innerRadius={65}
outerRadius={105}
paddingAngle={5}
label
>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="chartLegend">

<div>
<span className="green"></span>
Completed
<strong>
{data[0].value}
</strong>
</div>

<div>
<span className="orange"></span>
Pending
<strong>
{data[1].value}
</strong>
</div>

<div>
<span className="blue"></span>
In Progress
<strong>
{data[2].value}
</strong>
</div>

</div>
    </div>
  );
}

export default TaskChart;
