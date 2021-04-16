import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  display: ${props => (props.hide ? 'flex' : 'none')};
`;

export const Modal = styled.div`
  background: #fff;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 10%;
  width: 100%;
  height: auto;
  border: 3px solid #000;
`;

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column;

  input {
    border: 2px solid #000;
    padding: 5px 10px;
    width: 100%;
    margin-top: 10px;
  }
`;

export const ModalBtnsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;

  button {
    border: 2px solid #000;
    background: transparent;
    font-family: 'Rubik', sans-serif;
    font-size: 14px;
    font-weight: 600;
    padding: 5px 10px;
    margin-top: 20px;
    box-shadow: 5px 5px #000;
    margin-right: 10px;

    &:active {
      background-color: yellow;
      box-shadow: 2px 2px #000;
      transform: translateY(4px);
    }

    &:hover {
      background: lightyellow;
    }
  }
`;
