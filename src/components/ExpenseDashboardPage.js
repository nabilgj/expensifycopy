import React from "react";

import ExpensesList from "./ExpensesList";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpenseDashboardPage = (props) => (
  <div>
    <ExpenseListFilters />
    <ExpensesList />
  </div>
);

// into AppRouter
export default ExpenseDashboardPage;
