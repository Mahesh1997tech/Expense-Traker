import Wallet from "../components/Wallet";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import ExpenseSummary from "../components/ExpenseSummary";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <Wallet />
      <ExpenseForm />
      <ExpenseList />
      <ExpenseSummary />
      <Link to="/add-expense">
        <button>Add New Expense</button>
      </Link>
    </div>
  );
};

export default Home;
