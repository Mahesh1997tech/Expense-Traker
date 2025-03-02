import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useContext } from "react";
import { ExpenseContext } from "./ExpenseContext";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const ExpenseSummary = () => {
  const { expenses } = useContext(ExpenseContext);

  const categoryData = expenses.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});

  const chartData = Object.keys(categoryData).map((key, index) => ({
    name: key,
    value: categoryData[key],
    fill: COLORS[index % COLORS.length],
  }));

  return (
    <PieChart width={400} height={300}>
      <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
        {chartData.map((entry, index) => (
          <Cell key={index} fill={entry.fill} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default ExpenseSummary;
