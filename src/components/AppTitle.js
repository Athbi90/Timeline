import styled from "styled-components";

const TopTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 30px;
  color: #0c0f0a;
`;
const SecondTitle = styled.h3`
  display: flex;
  justify-content: center;  
  font-size: 20px;
  color: #0c0f0a;
`;
const AppTitle = () => {
  return (
    <>
      <TopTitle> Manchester United </TopTitle>
      <SecondTitle>The Red Devils</SecondTitle>
    </>
  );
};
export default AppTitle;
