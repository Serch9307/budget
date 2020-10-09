import React, { Fragment, useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Ask = ({ updateBudget, updateRemainingBudget, updateAsk }) => {
  //define state
  const [quantity, updateQuantity] = useState(0);
  const [error, updateError] = useState(false);

  // set budget according user
  const handleChange = (e) => {
    updateQuantity(parseInt(e.target.value));
  };

  // Submit to define the budget (form)
  const submitBudget = (e) => {
    e.preventDefault();
    // Validate
    if (isNaN(quantity) || quantity < 1) {
      updateError(true);
      return;
    }
    // Remove bug message
    updateError(false);

    // Create the budget
    updateBudget(quantity);
    updateRemainingBudget(quantity);
    // Initialize the budget
    updateAsk(false);
  };

  return (
    <Fragment>
      <h2>Set your Budget</h2>
      {error ? <Error message="The budget it's incorrect!" /> : null}
      <form onSubmit={submitBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="set your budget"
          onChange={handleChange}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Set butget"
        />
      </form>
    </Fragment>
  );
};
Ask.propTypes = {
  updateBudget: PropTypes.func.isRequired,
  updateRemainingBudget: PropTypes.func.isRequired,
  updateAsk: PropTypes.func.isRequired,
};
export default Ask;
