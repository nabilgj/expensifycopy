import React, { Component } from "react";

import { connect } from "react-redux";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../actions/filters";

import { DateRangePicker } from "react-dates";

export class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null,
  };

  onDatesChanged = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChanged = (calendarFocused) => {
    this.setState(() => {
      return {
        calendarFocused: calendarFocused,
      };
    });
  };

  onTextChanged = (e) => this.props.setTextFilter(e.target.value);

  onSortChanged = (e) => {
    if (e.target.value === "date") {
      this.props.sortByDate();
    } else if (e.target.value === "amount") {
      this.props.sortByAmount();
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChanged}
        />

        <select value={this.props.filters.sortBy} onChange={this.onSortChanged}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChanged}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChanged}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  };
};

// into ExpenseDashboardPage
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
