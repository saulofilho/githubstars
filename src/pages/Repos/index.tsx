import React, { useCallback, useState, useMemo } from 'react';
import Header from '../../components/Header';
import UsersTable from '../../components/UsersTable/index';
import SearchTag from '../../components/SearchTag';
import Footer from '../../components/Footer';

interface ILocation {
  location: string;
  pathname: string;
  state: any;
}

export default function Repos(props: {
  location: ILocation;
}): React.ReactElement {
  const { location } = props;
  const [searchValue, setSearchValue] = useState('' as string);

  const initialFormState = {
    tags: '',
  };

  const [currentData, setCurrentData] = useState(initialFormState as any);

  const [githubData, setGithubData] = useState(location.state.githubData);

  const fixUndefinedTags = githubData.map((item: { tags: string }) => {
    return {
      ...item,
      tags: !item.tags ? '' : item.tags,
    };
  });

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setCurrentData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const updateItem = useCallback(
    (id: unknown, updateTags: string) => {
      const upData = fixUndefinedTags.map((elm: { id: string }) =>
        elm.id === id ? updateTags : elm
      );

      setGithubData(upData);
      localStorage.setItem('storedDataTag', JSON.stringify(upData));
    },
    [fixUndefinedTags]
  );

  const handleSearchTagChanges = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchValue(e.target.value);
  };

  const storedDataTag = JSON.parse(
    localStorage.getItem('storedDataTag') || '{}'
  );

  const searchResults: string[] = useMemo(
    () =>
      !searchValue
        ? storedDataTag
        : storedDataTag.filter((item: { tags: { toString: () => string } }) =>
            item.tags
              .toString()
              .toLowerCase()
              .includes(searchValue.toLowerCase())
          ),
    [storedDataTag, searchValue]
  );

  return (
    <>
      <Header location={location} />
      <SearchTag handleSearchTagChanges={handleSearchTagChanges} />
      {storedDataTag.length ? (
        <UsersTable
          searchResults={searchResults}
          updateItem={updateItem}
          setCurrentData={setCurrentData}
          currentData={currentData}
          handleInputChange={handleInputChange}
        />
      ) : (
        <UsersTable
          searchResults={fixUndefinedTags}
          updateItem={updateItem}
          setCurrentData={setCurrentData}
          currentData={currentData}
          handleInputChange={handleInputChange}
        />
      )}

      <Footer />
    </>
  );
}
