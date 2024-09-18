"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// User type definition
interface User {
  id: number;
  name: string;
  username: string;
  phone_number: string;
  email: string;
}

// UserContext type definition
interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

// Create the UserContext
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
