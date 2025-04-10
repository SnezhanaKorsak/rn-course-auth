import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Colors } from '../constants/styles';
import { AuthenticatedStackParamList } from './types';

import { WelcomeScreen } from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator<AuthenticatedStackParamList>();

export const AuthenticatedStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};