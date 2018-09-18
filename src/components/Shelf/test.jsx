import * as React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Shelf from "./";

describe("MediaTile", () => {
  test("snapshot test", () => {
    const tree = renderer.create(<Shelf />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can render children", () => {
    const tree = shallow(
      <Shelf>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </Shelf>
    );
    expect(tree.children()).toHaveLength(6);
  });
});
