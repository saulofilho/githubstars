import React from 'react';
import { InputWrapper } from './styles.js';

type InputProps = {
  handleSearchTagChanges: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchTag({
  handleSearchTagChanges,
}: InputProps): React.ReactElement {
  return (
    <InputWrapper>
      <input
        type="search"
        placeholder="search by tag"
        onChange={handleSearchTagChanges}
      />
    </InputWrapper>
  );
}
