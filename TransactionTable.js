import React from "react";

const TransactionTable = ({ transactions, onDeleteTransaction }) => {
  return (
    <div>
      <h2>Transaction Table</h2>
    <table>
         <thead>
          <tr>
        <th>Date</th>
         <th>Description</th>
         <th>Category</th>
      <th>Amount</th>
        <th>Action</th>
    </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>
                <button onClick={() => onDeleteTransaction(transaction.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;