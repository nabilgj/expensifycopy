import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

import moment from "moment";

test("should render ExpenseForm ", () => {
  const wrapper = shallow(<ExpenseForm />);

  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm with expense data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });

  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", () => {
  const wrapper = shallow(<ExpenseForm />);

  const value = "new desc";
  wrapper
    .find("input")
    .at(0)
    .simulate("change", {
      target: { value: value },
    });

  expect(wrapper.state("description")).toBe(value);
});

test("should set note on input change", () => {
  const wrapper = shallow(<ExpenseForm />);
  const note = "may rent";
  wrapper.find("textarea").simulate("change", {
    target: { value: note },
  });

  expect(wrapper.state("note")).toBe(note);
});

test("should set amount on input if valid value", () => {
  const wrapper = shallow(<ExpenseForm />);

  const amount = "23.5";
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value: amount },
    });

  expect(wrapper.state("amount")).toBe(amount);
});

test("should set amount on input if invalid value", () => {
  const wrapper = shallow(<ExpenseForm />);

  const amount = "23.502";
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value: amount },
    });

  expect(wrapper.state("amount")).toBe("");
});

test("should call onsubmit prop for valid form submission", () => {
  const onSubmitSpy = jest.fn();

  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );

  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });

  expect(wrapper.state("error")).toBe("");

  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt,
    note: expenses[0].note,
  });
});

test("should set new date on date change", () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find("SingleDatePicker").prop("onDateChange")(now);

  expect(wrapper.state("createdAt")).toEqual(now);
});

test("should set calendarFocus  on change", () => {
  const calendarFocus = true;
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find("SingleDatePicker").prop("onFocusChange")({
    focused: calendarFocus,
  });

  expect(wrapper.state("calendarFocused")).toBe(calendarFocus);
});
