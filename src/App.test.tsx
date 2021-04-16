import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

import Home from './pages/Home';
// import Repos from './pages/Repos';

import Footer from './components/Footer';
import Header from './components/Header';
import SearchMain from './components/SearchMain';
import SearchTag from './components/SearchTag';
import UsersTable from './components/UsersTable';

const locationHome = { pathname: '/' };
// const locationRepos = { pathname: '/:name', state: [] };

test('renders GitHub Stars', () => {
  render(<App />);
  const linkElement = screen.getByText(/GitHub Stars/i);
  expect(linkElement).toBeInTheDocument();
});

afterEach(cleanup);

describe('Testing Home Page', () => {
  it('should render correctly', () => {
    const wrapper = render(<Home location={locationHome} />);

    expect(wrapper).toBeTruthy();
  });
});

// describe('Testing Repos Page', () => {
//   it('should render correctly', () => {
//     const wrapper = render(<Repos location={locationRepos} />);

//     expect(wrapper).toBeTruthy();
//   });
// });

describe('Testing Footer Component', () => {
  it('should render correctly', () => {
    const wrapper = render(<Footer />);

    expect(wrapper).toBeTruthy();
  });
});

describe('Testing Header Component', () => {
  it('should render correctly', () => {
    const wrapper = render(<Header location={locationHome} />);

    expect(wrapper).toBeTruthy();
  });
});

describe('Testing Header Component', () => {
  it('should render correctly', () => {
    const wrapper = render(<Header location={locationHome} />);

    expect(wrapper).toBeTruthy();
  });
});

describe('Testing SearchMain Component', () => {
  it('should render correctly', () => {
    const wrapper = render(<SearchMain location={locationHome} />);

    expect(wrapper).toBeTruthy();
  });
});

describe('Testing SearchTag Component', () => {
  it('should render correctly', () => {
    const wrapper = render(<SearchTag location={locationHome} />);

    expect(wrapper).toBeTruthy();
  });
});

describe('Testing UsersTable Component', () => {
  it('should render correctly', () => {
    const wrapper = render(<UsersTable location={locationHome} />);

    expect(wrapper).toBeTruthy();
  });
});
