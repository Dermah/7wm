import * as React from "react";
import renderer from "react-test-renderer";

import MediaTile from "./";

describe("MediaTile", () => {
  test("snapshot test", () => {
    const tree = renderer.create(<MediaTile />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
