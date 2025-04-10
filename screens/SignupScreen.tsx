import { useState } from 'react';
import { Alert } from 'react-native';

import { StatisticsService } from '../api/auth-service';

import { AuthContent } from '../components/Auth/AuthContent';
import { LoadingOverlay } from '../components/ui/LoadingOverlay';

export const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const signUpHandler = async (email: string, password: string) => {
    try {
      setIsAuthenticating(true);
      await StatisticsService.createUser(email, password);
    }catch(error) {
     Alert.alert('Error', error as string);
    } finally {
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signUpHandler}/>;
}