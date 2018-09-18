import * as React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import styled from "styled-components";

import Channel7Logo from "./";

describe("Channel7Logo", () => {
  test("snapshot test", () => {
    const tree = renderer.create(<Channel7Logo />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be styled", () => {
    const WrappedLogo = styled(Channel7Logo)`
      margin-left: 1em;
    `;

    const renderedLogo = shallow(<WrappedLogo />);
    expect(renderedLogo.hasClass(WrappedLogo.styledComponentId)).toBe(true);
  });
});
