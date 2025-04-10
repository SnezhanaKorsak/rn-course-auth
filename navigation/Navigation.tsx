import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthContext } from '../store/auth-context';

import { AuthStack } from './NativeStackNavigator';
import { AuthenticatedStackNavigator } from './AuthenticatedStackNavigator';

export const Navigation = () => {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStackNavigator />}
    </NavigationContainer>
  );
};