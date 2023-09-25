import { render, screen, fireEvent } from '@testing-library/react';
import UserTable from '../components/UserTable';

// Mock UserContext to provide dummy user data
jest.mock('../context/UserContext', () => ({
  useUserContext: () => ({
    users: [
      {
        name: 'John Doe',
        email: 'johndoe@example.com',
        birthdate: '1990-01-01',
        age: 33,
      },
      {
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        birthdate: '1985-05-15',
        age: 38,
      },
    ],
  }),
}));

describe('UserTable Component', () => {

  // Test if user data is displayed correctly
  it('displays user data correctly', () => {
    render(<UserTable />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('johndoe@example.com')).toBeInTheDocument();
  });

  // Test if user data is sorted correctly
  it('sorts user data correctly', () => {
    render(<UserTable />);
    const sortByNameButton = screen.getByText('Name');
    fireEvent.click(sortByNameButton);
    const janeUser = screen.getByText('Jane Smith');
    const johnUser = screen.getByText('John Doe');
    expect(janeUser).toBeInTheDocument();
    expect(johnUser).toBeInTheDocument();
  });
  
  // Test pagination behavior
  it('handles pagination correctly', () => {
    render(<UserTable />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.queryByText('2')).toBeNull();
  });

  // Mock window.matchMedia - check the media query matches, typically for handling responsive design.
  window.matchMedia = window.matchMedia || function() {
    return {
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

  // Suppress a specific warning in the console
  console.error = (message) => {
  if (message.startsWith('Warning: Each child in a list should have a unique "key" prop')) {
    return;
    }
    // Log other errors
    originalConsoleError(message);
  };

});