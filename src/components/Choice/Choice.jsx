import styled from "styled-components";

const StyledChoice = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    color: #ee2360;
    font-size: 40px;
  }
`;

const Choice = ({ imgLabel }) => (
  <StyledChoice>
    <h2>{imgLabel}</h2>
  </StyledChoice>
);

export default Choice;
