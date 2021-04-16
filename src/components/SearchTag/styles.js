import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row;
  padding: 70px 0 10px;
  max-width: 900px;
  margin: 0 auto;

  input {
    border: 2px solid #000;
    border-radius: 40px;
    padding: 5px 10px;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
