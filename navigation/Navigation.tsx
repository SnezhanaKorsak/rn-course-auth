import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './NativeStackNavigator';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};