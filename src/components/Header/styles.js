import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  padding: 10px 30px;

  h1 {
    font-size: 18px;
    font-weight: 600;
  }
`;

export const Content = styled.div`
  margin: 0px auto;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row;
`;
