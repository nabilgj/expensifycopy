import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("should setup removeExpense action object", () => {
  const action = removeExpense({ id: "abc123" });

  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "abc123",
  });
});

test("should setup editExpense action object", () => {
  const action = editExpense("abc123", { amount: "23.50" });

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "abc123",
    updates: {
      amount: "23.50",
    },
  });
});

test("should setup addExpense action object with values", () => {
  const expenseData = {
    description: "rent",
    amount: 109500,
    createdAt: 1000,
    note: "May rent",
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      ...expenseData,
    },
  });
});

test("should setup addExpense action object with default values", () => {
  const expenseData = {
    description: "",
    amount: 0,
    createdAt: 0,
    note: "",
  };

  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      ...expenseData,
    },
  });
});
