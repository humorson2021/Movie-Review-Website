import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders Movies/Profile links', () => {
  render(<App />, {wrapper: BrowserRouter});
  // render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement1 = screen.getByText(/Movies/i);
  expect(linkElement1).toBeInTheDocument();
  const linkElement2 = screen.getByText(/Profile/i);
  expect(linkElement2).toBeInTheDocument();
  const linkElement = screen.queryByText(/learn react/i);
  expect(linkElement).toBeNull();
});

jest.mock('@auth0/auth0-react', () => ({ 
  Auth0Provider: ({ children }) => children, 
  useAuth0: () => {
    return {
      isLoading: false,
    }
  }
}));
