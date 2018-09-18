import * as React from "react";
import styled from "styled-components";

import Logo from "./logo.png";

const StyledLogo = styled.img`
  width: 2em;
  height: 2em;
`;

export default () => <StyledLogo alt="Channel 7 Logo" src={Logo} />;
