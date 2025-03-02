// import ExpenseProvider from "./components/ExpenseContext";
// import Wallet from "./components/Wallet";
// import ExpenseForm from "./components/ExpenseForm";
// import ExpenseList from "./components/ExpenseList";
// import ExpenseSummary from "./components/ExpenseSummary";
// import "./style/style.css";

// function App() {
//   return (
//     <ExpenseProvider>
//       <div>
//         <h1>Expense Tracker</h1>
//         <Wallet />
//         <ExpenseForm />
//         <ExpenseList />
//         <ExpenseSummary />
//       </div>
//     </ExpenseProvider>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import ExpenseProvider from "./components/ExpenseContext";
import Home from "./pages/Home";
import AddExpense from "./pages/AddExpense";
import "./style/style.css";  // Import the global CSS file

function App() {
  return (
    <ExpenseProvider>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-expense" element={<AddExpense />} />
        </Routes>
      </div>
    </ExpenseProvider>
  );
}

export default App;
