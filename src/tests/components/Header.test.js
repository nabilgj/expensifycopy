// react-test-renderer
import React from "react";
import Header from "../../components/Header";

import { shallow } from "enzyme";

// import ReactShallowRenderer from "react-test-renderer/shallow";

test("should render Header coorectly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();

  //   expect(wrapper.find("h1").text()).toBe(" Expensify ");

  //   const renderer = new ReactShallowRenderer();
  //   renderer.render(<Header />);

  //   expect(renderer.getRenderOutput()).toMatchSnapshot();
});
