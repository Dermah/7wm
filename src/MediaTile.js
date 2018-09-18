import React from "react";
import styled from "styled-components";

const TileBase = styled.div`
  width: 630px;
  height: 354px;
  background-image: url("./tile.jpg");
`;

export default ({ title }) => <TileBase>{title}</TileBase>;
