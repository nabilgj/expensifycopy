import React, { Component } from "react";

import ExpenseForm from "./ExpenseForm";

import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";

export class AddExpensePage extends Component {
  onSubmitted = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmitted} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addExpense: (expense) => dispatch(addExpense(expense)),
  };
};

// into AppRouter
export default connect(undefined, mapDispatchToProps)(AddExpensePage);
