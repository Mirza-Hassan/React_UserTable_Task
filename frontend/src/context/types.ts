// User data
export interface User {
    id: number;
    name: string;
    email: string;
    birthdate: string;
    age: number;
  }
  
// Context value for user-related data
export interface UserContextValue {
  users: User[];
}

// Filter option
export interface FilterOption {
  text: string;
  value: string;
}