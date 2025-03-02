import { createContext, useState, useEffect } from "react";

export const ExpenseContext = createContext();

const ExpenseProvider = ({ children }) => {
  const [wallet, setWallet] = useState(() => {
    return Number(localStorage.getItem("wallet")) || 5000;
  });

  const [expenses, setExpenses] = useState(() => {
    return JSON.parse(localStorage.getItem("expenses")) || [];
  });

  useEffect(() => {
    localStorage.setItem("wallet", wallet);
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [wallet, expenses]);

  const addExpense = (expense) => {
    if (expense.amount > wallet) {
      alert("Not enough balance!");
      return;
    }
    setExpenses([...expenses, expense]);
    setWallet(wallet - expense.amount);
  };

  const deleteExpense = (id) => {
    const filteredExpenses = expenses.filter((exp) => exp.id !== id);
    const deletedExpense = expenses.find((exp) => exp.id === id);
    setExpenses(filteredExpenses);
    setWallet(wallet + deletedExpense.amount);
  };

  return (
    <ExpenseContext.Provider value={{ wallet, setWallet, expenses, addExpense, deleteExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
