import React, { useState, useEffect } from "react";
import TransactionTable from "./TransactionTable";
import TransactionForm from "./TransactionForm";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
        setFilteredTransactions(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleAddTransaction = (newTransaction) => {
    setFilteredTransactions([...filteredTransactions, newTransaction]);
  };

  const handleDeleteTransaction = (id) => {
    const updatedTransactions = filteredTransactions.filter((transaction) => transaction.id !== id);
    setFilteredTransactions(updatedTransactions);
  };

  const handleFilterTransactions = (searchTerm) => {
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div>
      <h1>Bank Transactions App</h1>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <div>
        <label>Search:</label>
        <input type="text" onChange={(e) => handleFilterTransactions(e.target.value)} />
      </div>
      <TransactionTable transactions={filteredTransactions} onDeleteTransaction={handleDeleteTransaction} />
    </div>
  );
};

export default App;
