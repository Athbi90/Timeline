import styled from "styled-components";

import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
background-color: #427aa1;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: flex-start;
  color: #a10702;
  float: left;
`;
export const Description = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #a10702;
`;
export const TimeImage = styled.img`
  display: flex;
  justify-content: center;
  margin: auto;
  height: 250px;
  width: 250px;
  margin-left: 30px;
  border-radius: 200px;
`;

export const TimeWrapper = styled.div`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  display: block;
  background-color: #427aa1;
`;
