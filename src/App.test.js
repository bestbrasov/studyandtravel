// app.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Mock child components to isolate the tests
jest.mock('./components/Navbar/Navbar', () => () => <div>Navbar</div>);
jest.mock('./components/Application/Application', () => () => <div>Application</div>);
jest.mock('./components/About/About', () => () => <div>About</div>);
jest.mock('./components/FAQ/FAQ', () => () => <div>FAQ</div>);
jest.mock('./components/CoursePage/CoursePage', () => () => <div>CoursePage</div>);
jest.mock('./components/Contact/Contact', () => () => <div>Contact</div>);
jest.mock('./components/Home/Home', () => () => <div>Home</div>);

describe('App', () => {
  it('renders the Navbar component', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Navbar')).toBeInTheDocument();
  });

  it('renders the Home component for the root route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('renders the Application component for the /application route', () => {
    render(
      <MemoryRouter initialEntries={['/application']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Application')).toBeInTheDocument();
  });

  it('renders the About component for the /about route', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('renders the FAQ component for the /faq route', () => {
    render(
      <MemoryRouter initialEntries={['/faq']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('FAQ')).toBeInTheDocument();
  });

  it('renders the Contact component for the /contact route', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders the CoursePage component for the /course/:cod route', () => {
    render(
      <MemoryRouter initialEntries={['/course/123']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('CoursePage')).toBeInTheDocument();
  });
});
