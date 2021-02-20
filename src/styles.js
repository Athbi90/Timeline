import styled from "styled-components";

import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
display:flex;
justify-content: center;
align-items: center;
background-color: #427aa1;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: flex-start;
  color: #a7cecb;
  float: left;
`;
export const TitleDate = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
`;
export const Description = styled.p`
  display: flex;
  justify-content: flex-start;
  color: #c99da3;
`;

export const Date = styled.h3`
  display: flex;
  justify-content: flex-start;
  color: #b0db43;
  float: left;
`;
export const TimeImage = styled.img`
  margin: auto;
  height: 250px;
  width: 250px;
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 200px;
`;

export const TimeWrapper = styled.div`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  display: flexbox;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: center;
  padding: 100px;
  margin: auto;
  background-color: #ff3352;
`;
