import React, { useState } from 'react';
import ModalBackdrop from './ModalTag/index';

import { TableComparativeWrapper, NotFound } from './styles.js';

interface IProps {
  searchResults: string[];
  updateItem: (arg0: number, arg1: string) => void;
  currentData: unknown;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setCurrentData: (arg0: any) => void;
}

interface IData {
  row: any;
  index: number;
}

export default function UsersTable({
  searchResults,
  updateItem,
  setCurrentData,
  currentData,
  handleInputChange,
}: IProps): React.ReactElement {
  const [modalState, setModalState] = useState(false);
  const [modalInfos, setModalInfos] = useState({});

  const toggleModal = (item: string) => {
    setModalState(!modalState);
    setModalInfos(item);
  };

  const TableRow = ({ row, index }: IData): React.ReactElement => {
    return (
      <tbody key={row.id}>
        <tr>
          <td>
            <a href={row.html_url} target="_blank" rel="noreferrer">
              {row.name}
            </a>
          </td>
          <td>{row.description}</td>
          <td>{row.language}</td>
          <td>
            {row.tags && row.tags.length ? `#${row.tags.split(', ')}` : ''}
          </td>
          <td>
            <button
              type="button"
              onClick={() => {
                toggleModal(row);
                setCurrentData(row);
              }}
            >
              edit
            </button>
          </td>
        </tr>
      </tbody>
    );
  };

  return (
    <>
      {searchResults && searchResults.length ? (
        <TableComparativeWrapper>
          <table>
            <thead>
              <tr>
                <th>Repository</th>
                <th>Description</th>
                <th>Language</th>
                <th>Tags</th>
                <th>{}</th>
              </tr>
            </thead>
            {searchResults.map(
              (row, index): React.ReactElement => (
                <TableRow row={row} index={index} />
                // I need to study and fix that.
                // row.id has a pros error
                // <TableRow row={row} index={index} key={row.id} />
              )
            )}
          </table>
        </TableComparativeWrapper>
      ) : (
        <NotFound>
          <h1>User not found.</h1>
        </NotFound>
      )}
      <ModalBackdrop
        toggleModal={toggleModal}
        modalState={modalState}
        modalInfos={modalInfos}
        updateItem={updateItem}
        currentData={currentData}
        handleInputChange={handleInputChange}
      />
    </>
  );
}
