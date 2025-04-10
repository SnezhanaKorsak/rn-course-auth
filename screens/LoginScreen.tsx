import { useState } from 'react';
import { Alert } from 'react-native';

import { AuthContent } from '../components/Auth/AuthContent';
import { StatisticsService } from '../api/auth-service';

import { LoadingOverlay } from '../components/ui/LoadingOverlay';

export const LoginScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const loginHandler = async (email: string, password: string) => {
    try {
      setIsAuthenticating(true);
      await StatisticsService.login(email, password);
    } catch (error) {
      Alert.alert('Error', error as string);
    } finally {
      setIsAuthenticating(false);
    }
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
};