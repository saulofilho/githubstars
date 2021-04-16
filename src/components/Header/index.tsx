import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderContainer, Content } from './styles.js';

interface ILocation {
  pathname: string;
  location: string;
}

export default function Header(props: {
  location: ILocation;
}): React.ReactElement {
  const { location } = props;

  return (
    <HeaderContainer>
      <Content>
        <h1>⭐ GitHub Stars</h1>
        {location.pathname === '/' ? '' : <Link to="/">home</Link>}
      </Content>
    </HeaderContainer>
  );
}
