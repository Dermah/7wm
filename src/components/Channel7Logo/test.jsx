import * as React from "react";
import renderer from "react-test-renderer";

import Channel7Logo from "./";

describe("Channel7Logo", () => {
  test("snapshot test", () => {
    const tree = renderer.create(<Channel7Logo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
