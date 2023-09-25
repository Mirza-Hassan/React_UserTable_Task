import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, UserContextValue } from './types';

// Create a context for managing user data
const UserContext = createContext<UserContextValue | undefined>(undefined);

// UserProvider component to fetch and provide user data
export function UserProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<User[]>([]);

  // Fetch user data from an API
  const fetchUsers = async () => {
    try {
      const response = await fetch('https://private-e7f67d-users324.apiary-mock.com/users');
      setUsers(await response.json());
    } catch (error) {}
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Create a context value with user data
  const contextValue: UserContextValue = { users };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
}

// Custom hook to access the UserContext
export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUserContext must be used within a UserProvider');
  return context;
}
