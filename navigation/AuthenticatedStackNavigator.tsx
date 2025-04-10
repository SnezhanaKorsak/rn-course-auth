import { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthContext } from '../store/auth-context';
import { Colors } from '../constants/styles';
import { AuthenticatedStackParamList } from './types';

import { WelcomeScreen } from '../screens/WelcomeScreen';
import { IconButton } from '../components/ui/IconButton';

const Stack = createNativeStackNavigator<AuthenticatedStackParamList>();

export const AuthenticatedStackNavigator = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor || Colors.primary100}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};