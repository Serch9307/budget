export const checkBudget = (budget, remainingBudget) => {
  let myClass;

  if (budget / 4 > remainingBudget) {
    myClass = "alert alert-danger";
  } else if (budget / 2 > remainingBudget) {
    myClass = "alert alert-warning";
  } else {
    myClass = "alert alert-success";
  }

  return myClass;
};
