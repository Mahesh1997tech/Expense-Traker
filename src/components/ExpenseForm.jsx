import { useState, useContext } from "react";
import { ExpenseContext } from "./ExpenseContext";
import { v4 as uuidv4 } from "uuid";

const ExpenseForm = () => {
  const { addExpense } = useContext(ExpenseContext);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !category || !date) return alert("All fields are required!");

    const newExpense = {
      id: uuidv4(),
      title,
      amount: Number(amount),
      category,
      date
    };

    addExpense(newExpense);
    setTitle(""); setAmount(""); setCategory(""); setDate("");
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Expense Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
      </select>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
