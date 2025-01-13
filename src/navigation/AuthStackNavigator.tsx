import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthHomeScreen from '../screens/AuthHomeScreen';
import LoginScreen from '../screens/LoginScreen';
import { AUTH_NAVIGATIONS } from '../constants';

export type AuthStackParamList = {
  [AUTH_NAVIGATIONS.AUTH_HOME]: undefined;
  [AUTH_NAVIGATIONS.LOGIN]: undefined;
};

export default function AuthStackNavigator() {
  const Stack = createStackNavigator<AuthStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen name={AUTH_NAVIGATIONS.AUTH_HOME} component={AuthHomeScreen} />
      <Stack.Screen name={AUTH_NAVIGATIONS.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
}
