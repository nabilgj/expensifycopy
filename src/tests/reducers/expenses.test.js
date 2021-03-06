import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INTI" });

  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const expense = {
    id: "4",
    description: "mobile",
    note: "",
    amount: 35,
    createdAt: 3000,
  };

  const action = {
    type: "ADD_EXPENSE",
    expense: expense,
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense with id", () => {
  const amount = 122000;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      amount: amount,
    },
  };

  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test("should not edit an expense if expense not found", () => {
  const amount = 122000;
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      amount: amount,
    },
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
