import React from 'react';

import {
  ModalBackdrop,
  Modal,
  ModalWrapper,
  ModalBtnsWrapper,
} from './styles.js';

interface IProps {
  toggleModal: any;
  modalState: boolean;
  modalInfos: any;
  updateItem: (arg0: number, arg1: string) => void;
  currentData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ModalTag({
  toggleModal,
  modalState,
  modalInfos,
  updateItem,
  currentData,
  handleInputChange,
}: IProps): React.ReactElement {
  return (
    <ModalBackdrop hide={modalState}>
      <Modal>
        <ModalWrapper>
          <p>Edit tags for {modalInfos && modalInfos.name}.</p>
          <input
            type="text"
            name="tags"
            placeholder="tags"
            id="tags"
            value={currentData && currentData.tags}
            onChange={handleInputChange}
          />
        </ModalWrapper>
        <ModalBtnsWrapper>
          <button
            type="button"
            onClick={e => {
              e.preventDefault();
              updateItem(modalInfos.id, currentData);
            }}
          >
            Save
          </button>
          <button type="button" onClick={() => toggleModal()}>
            Cancel
          </button>
        </ModalBtnsWrapper>
      </Modal>
    </ModalBackdrop>
  );
}
