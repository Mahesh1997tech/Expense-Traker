import ExpenseForm from "../components/ExpenseForm";
import { Link } from "react-router-dom";

const AddExpense = () => {
  return (
    <div>
      <h1>Add New Expense</h1>
      <ExpenseForm />
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default AddExpense;
