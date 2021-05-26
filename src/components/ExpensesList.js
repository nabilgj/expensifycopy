import React from "react";

import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";

import ExpenseListItem from "./ExpenseListItem";

// into test
export const ExpensesList = (props) => {
  return (
    <div>
      {props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        props.expenses.map((expense) => (
          <ExpenseListItem key={expense.id} {...expense} />
        ))
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

// into ExpenseDashboardPage
export default connect(mapStateToProps)(ExpensesList);
