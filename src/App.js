import React, { useState, useEffect } from "react";
import Ask from "./components/Ask";
import Form from "./components/Form";
import List from "./components/List";
import BudgetManager from "./components/BudgetManager";

function App() {
  // define states
  const [budget, updateBudget] = useState(0);
  const [remainingBudget, updateRemainingBudget] = useState(0);
  const [showAsk, updateAsk] = useState(true);
  const [expenses, updateExpenses] = useState([]);
  const [expense, updateExpense] = useState({});
  const [createBudget, updateCreateBudget] = useState(false);

  // UseEffect update de remaining
  useEffect(() => {
    //add the new budget
    if (createBudget) {
      updateExpenses([...expenses, expense]);

      // rest the current budget
      const budgetRest = remainingBudget - expense.quantity;
      updateRemainingBudget(budgetRest);

      //Reset a false
      updateCreateBudget(false);
    }
  }, [expense, createBudget, expenses, remainingBudget]);

  return (
    <div className="container">
      <header>
        <h1>Weekly expense</h1>
        <div className="contenido-principal contenido">
          {showAsk ? (
            <Ask
              updateBudget={updateBudget}
              updateRemainingBudget={updateRemainingBudget}
              updateAsk={updateAsk}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form
                  updateExpense={updateExpense}
                  updateCreateBudget={updateCreateBudget}
                />
              </div>
              <div className="one-half column">
                <List expenses={expenses} />
                <BudgetManager
                  budget={budget}
                  remainingBudget={remainingBudget}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
