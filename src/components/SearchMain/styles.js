import styled from 'styled-components';

export const Container = styled.div`
  margin: 0px auto;
  padding: 10px 30px;
  width: 100%;
  height: 100%;

  h1 {
    font-size: 18px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    padding: 20px 30px;
  }
`;

export const Content = styled.div`
  height: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

export const SearchBtn = styled.button`
  border: 2px solid #000;
  background: transparent;
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  font-weight: 600;
  padding: 5px 10px;
  margin-top: 20px;
  box-shadow: 5px 5px #000;

  &:active {
    background-color: yellow;
    box-shadow: 2px 2px #000;
    transform: translateY(4px);
  }

  &:hover {
    background: lightyellow;
  }
`;

export const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid yellow;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
