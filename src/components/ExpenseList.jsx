import { useContext } from "react";
import { ExpenseContext } from "./ExpenseContext";

const ExpenseList = () => {
  const { expenses, deleteExpense } = useContext(ExpenseContext);

  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      {expenses.length === 0 ? <p>No expenses added yet.</p> : (
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id} className="expense-item">
              <div className="expense-details">
                <strong>{expense.title}</strong> - ₹{expense.amount} ({expense.category}) [{expense.date}]
              </div>
              <button onClick={() => deleteExpense(expense.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
