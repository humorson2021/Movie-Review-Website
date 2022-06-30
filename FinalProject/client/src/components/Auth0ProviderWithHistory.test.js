
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory';

test("renders without crash", async () => {
    jest.mock('@auth0/auth0-react', () => ({ 
        Auth0Provider: ({ children }) => children, 
        useAuth0: () => {
          return {
            isLoading: false,
          }
        }
      }));

});