import * as React from "react";
import renderer from "react-test-renderer";

import MediaTile from "./";

describe("MediaTile", () => {
  test("snapshot test", () => {
    const tree = renderer.create(<MediaTile />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("snapshot test with custom image", () => {
    const tree = renderer
      .create(
        <MediaTile src="https://loremflickr.com/320/240/food,cook,kitchen/all" />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
