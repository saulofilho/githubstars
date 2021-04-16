import styled from 'styled-components';

export const TableComparativeWrapper = styled.div`
  display: block;
  border: 2px solid #000;
  overflow: auto;
  text-align: center;
  margin: 20px auto;
  max-width: 900px;

  table {
    border-collapse: collapse;
    text-align: left;
    width: 100%;

    th {
      padding: 5px;
      text-align: left;
      background-color: lightgray;
      color: white;
      color: #000;
      border-right: 2px solid #000;
      font-weight: 400;
    }

    td {
      padding: 5px;
      border-right: 2px solid #000;
    }

    tbody:nth-child(even) {
      background-color: #f2f2f2;
    }

    tbody:hover {
      background-color: yellow;
    }

    button {
      border: unset;
      text-decoration: underline;
      background: transparent;
    }
  }

  @media (max-width: 768px) {
    margin: 20px 30px;
  }
`;

export const NotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
`;


