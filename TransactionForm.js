import React, { useState } from "react";

const TransactionForm = ({ onAddTransaction }) => {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      date,
      description,
      category,
      amount: parseFloat(amount),
    };
    onAddTransaction(newTransaction);
    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
  };

  return (
    <div>
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;