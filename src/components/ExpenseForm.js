import React, { Component } from "react";
import moment from "moment";

import { SingleDatePicker } from "react-dates";

const now = moment();
console.log("moment", now.format("Do MMM, YYYY"));

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: "",
    };
  }

  onDescriptionChanged = (e) => {
    const description = e.target.value;

    this.setState(() => {
      return {
        description: description,
      };
    });
  };

  onAmountChanged = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => {
        return {
          amount: amount,
        };
      });
    }
  };

  onDateChanged = (createdAt) => {
    if (createdAt) {
      this.setState(() => {
        return {
          createdAt: createdAt,
        };
      });
    }
  };

  onFocusChanged = ({ focused }) => {
    this.setState(() => {
      return {
        calendarFocused: focused,
      };
    });
  };

  onNoteChanged = (e) => {
    const note = e.target.value;

    this.setState(() => {
      return {
        note: note,
      };
    });
  };

  onSubmitted = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      // set error state "Please provide description and amount"
      this.setState(() => {
        return {
          error: "Please provide description and amount",
        };
      });
    } else {
      this.setState(() => {
        return {
          error: "",
        };
      });
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmitted}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChanged}
          />

          <input
            type="number"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChanged}
          />

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChanged}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChanged}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />

          <textarea
            placeholder="Add a note for your expense"
            value={this.state.note}
            onChange={this.onNoteChanged}
          ></textarea>

          <button>{this.props.expense ? "Edit Expense" : "Add Expense"}</button>
        </form>
      </div>
    );
  }
}

// into AddExpensePage & EditExpensePage
export default ExpenseForm;
