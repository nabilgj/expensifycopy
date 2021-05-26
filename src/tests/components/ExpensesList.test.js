import React from "react";
import { shallow } from "enzyme";
import { ExpensesList } from "../../components/ExpensesList.js";
import expenses from "../fixtures/expenses";

test("should render ExpensesList with expenses", () => {
  const wrapper = shallow(<ExpensesList expenses={expenses} />);

  expect(wrapper).toMatchSnapshot();
});

test("should render ExpensesList with no expenses", () => {
  const wrapper = shallow(<ExpensesList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
