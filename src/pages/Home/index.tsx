import React from 'react';
import Header from '../../components/Header';
import SearchMain from '../../components/SearchMain';

interface ILocation {
  location: string;
  pathname: string;
}

export default function Home(props: {
  location: ILocation;
}): React.ReactElement {
  const { location } = props;
  localStorage.removeItem('storedDataTag');

  return (
    <>
      <Header location={location} />
      <SearchMain />
    </>
  );
}
