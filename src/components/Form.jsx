import React, { useState } from "react";
import shortid from "shortid";
import Error from "./Error";
import PropTypes from "prop-types";

const Form = ({ updateExpense, updateCreateBudget }) => {
  const [name, updateName] = useState("");
  const [quantity, updateQuantity] = useState(0);
  const [error, updateError] = useState(false);
  // when the user add expense
  const addExpense = (e) => {
    e.preventDefault();

    // Validate
    if (quantity < 1 || isNaN(quantity) || name.trim() === "") {
      updateError(true);
      return;
    }
    // Remove bug message
    updateError(false);
    updateCreateBudget(true);

    // create expense
    const expense = {
      name,
      quantity,
      id: shortid(),
    };

    // send the expense to principal component
    updateExpense(expense);

    // reset the form
    updateName("");
    updateQuantity(0);
  };

  return (
    <form onSubmit={addExpense}>
      <h2>Add your expenses here!</h2>
      {error ? <Error message="Expense it's incorrect!" /> : null}
      <div className="campo">
        <label>Expending Name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="ex. Transport"
          value={name}
          onChange={(e) => updateName(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Expense Quantity</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="ex. 300"
          value={quantity}
          onChange={(e) =>
            updateQuantity(
              isNaN(parseInt(e.target.value, 10))
                ? 0
                : parseInt(e.target.value, 10)
            )
          }
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Add Expending"
      />
    </form>
  );
};
Form.propTypes = {
  updateExpense: PropTypes.func.isRequired,
  updateCreateBudget: PropTypes.func.isRequired,
};
export default Form;
