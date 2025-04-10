import { useState, useContext } from 'react';
import { Alert } from 'react-native';

import { StatisticsService } from '../api/auth-service';
import { AuthContext } from '../store/auth-context';

import { AuthContent } from '../components/Auth/AuthContent';
import { LoadingOverlay } from '../components/ui/LoadingOverlay';

export const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  const signUpHandler = async (email: string, password: string) => {
    try {
      setIsAuthenticating(true);
      const token = await StatisticsService.createUser(email, password);
      authCtx.authenticate(token);
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