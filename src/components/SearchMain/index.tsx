/* eslint-disable no-shadow */
import React, { useCallback, useState } from 'react';
import { Redirect } from 'react-router-dom';

import SearchInput from './SearchInput';
import api from '../../services/api';

import { Container, Content, SearchBtn, Loader } from './styles.js';

export default function SearchMain(): React.ReactElement {
  const [searchValue, setSearchValue] = useState('' as string);
  const [loading, setLoading] = useState(false);
  const [githubData, setGithubData] = useState([] as string[]);

  const handleSearchInputChanges = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchValue(e.target.value);
  };

  const fetchData = useCallback(
    async searchValue => {
      setLoading(!loading);
      await api
        .get(`users/${searchValue}/starred`)
        .then(response => {
          const { data } = response;

          setGithubData([...data]);
          localStorage.setItem('storedDataTag', JSON.stringify([...data]));
        })
        .catch(err => {
          return err.message;
        });
    },
    [loading]
  );

  const callSearchFunction = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    fetchData(searchValue);
  };

  return (
    <Container>
      <Content>
        {loading ? (
          <>
            <Loader />
            <p>Getting the repositories list from GitHub...</p>
          </>
        ) : (
          <>
            <SearchInput handleSearchInputChanges={handleSearchInputChanges} />
            <SearchBtn type="button" onClick={callSearchFunction}>
              get repositories ➧
            </SearchBtn>
          </>
        )}
      </Content>
      {githubData.length ? (
        <Redirect
          to={{
            pathname: `/${searchValue}`,
            state: { githubData },
          }}
        />
      ) : (
        ''
      )}
    </Container>
  );
}
