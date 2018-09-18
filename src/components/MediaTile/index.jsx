import * as React from "react";
import styled from "styled-components";

import Channel7Logo from "../Channel7Logo";

const TileBase = styled.div`
  width: 630px;
  height: 354px;
  position: relative;
  margin: 1em;

  background-image: url("${({ src }) => src || "./tile.jpg"}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  flex-grow: 0
  flex-shrink: 0
`;

const TileTitle = styled.h3`
  font-weight: normal;
  font-size: 1.5em;
  color: white;
  text-align: left;
  background: rgba(0, 0, 0, 0.5);

  width: 100%;
  margin: 0;
  padding: 1em;
  position: absolute;
  bottom: 0;

  display: flex;
  align-items: center;
`;

const TitleLogo = styled(Channel7Logo)`
  margin-right: 0.5em;
`;

export default ({ title, src }) => (
  <TileBase src={src}>
    <TileTitle>
      <TitleLogo />
      {title}
    </TileTitle>
  </TileBase>
);
