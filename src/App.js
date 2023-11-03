import React from "react";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import AccountContainer from "./AccountContainer";
import TransactionsList from "./TransactionsList";
import Transaction from "./Transaction";
function App() {
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer />
    </div>
  );
}

export default App;