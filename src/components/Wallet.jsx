import { useContext, useState } from "react";
import { ExpenseContext } from "./ExpenseContext";

const Wallet = () => {
  const { wallet, setWallet } = useContext(ExpenseContext);
  const [amount, setAmount] = useState("");

  const addBalance = () => {
    setWallet(wallet + Number(amount));
    setAmount("");
  };

  return (
    <div className="wallet">
      <h2>Wallet Balance: ₹{wallet}</h2>
      <input type="number" placeholder="Add money" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={addBalance}>Add</button>
    </div>
  );
};

export default Wallet;
