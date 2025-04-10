import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  authenticate: (token: string) => {
  },
  logout: () => {
  },
});

type Props = {
  children: React.ReactNode;
}

export const AuthContextProvider = ({ children }: Props) => {
  const [authToken, setAuthToken] = useState<string>('');

  function authenticate(token: string) {
    setAuthToken(token);
  }

  function logout() {
    setAuthToken('');
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};