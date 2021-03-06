import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage";
import expenses from "../fixtures/expenses";

let addExpense, history, wrapper;
beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };

  wrapper = shallow(
    <AddExpensePage addExpense={addExpense} history={history} />
  );
});

test("should render AddExpensePage", () => {
  expect(wrapper).toMatchSnapshot();
});

// test("should handle onsubmit", () => {
//   wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0]);

//   expect(history.push).toHavBeenLastCalledWith("/");
//   expect(addExpense).toHavBeenLastCalledWith(expenses[0]);
// });
