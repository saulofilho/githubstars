import React from 'react';
import { InputWrapper } from './styles.js';

type InputProps = {
  handleSearchInputChanges: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchInput({
  handleSearchInputChanges,
}: InputProps): React.ReactElement {
  return (
    <InputWrapper>
      <p>https://github.com/</p>
      <input
        type="search"
        placeholder="username"
        onChange={handleSearchInputChanges}
      />
    </InputWrapper>
  );
}
