import { StatusBar } from 'expo-status-bar';

import { AuthContextProvider } from './store/auth-context';

import { Navigation } from './navigation/Navigation';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>

    </>
  );
};