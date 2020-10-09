import React, { Fragment } from "react";
import { checkBudget } from "../helpers";
import PropTypes from "prop-types";

const BudgetManager = ({ budget, remainingBudget }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Budget: $ {budget}</div>
      <div className={checkBudget(budget, remainingBudget)}>
        Remaining: $ {remainingBudget}
      </div>
    </Fragment>
  );
};
BudgetManager.propTypes = {
  budget: PropTypes.number.isRequired,
  remainingBudget: PropTypes.number.isRequired,
};
export default BudgetManager;
