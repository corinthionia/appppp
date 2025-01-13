import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AUTH_NAVIGATIONS } from '~/constants';
import { AuthHomeScreen, SignUpScreen, LoginScreen } from '~/screens';
import { AuthStackParamList } from '~/types';

const Stack = createStackNavigator<AuthStackParamList>();

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: 'white' },
        headerStyle: { backgroundColor: 'white', shadowColor: 'gray' },
        headerTitleStyle: { fontSize: 15 },
        headerTintColor: 'black',
      }}
    >
      <Stack.Screen
        name={AUTH_NAVIGATIONS.AUTH_HOME}
        component={AuthHomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={AUTH_NAVIGATIONS.LOGIN}
        component={LoginScreen}
        options={{
          headerTitle: '로그인',
        }}
      />
      <Stack.Screen
        name={AUTH_NAVIGATIONS.SIGN_UP}
        component={SignUpScreen}
        options={{
          headerTitle: '회원가입',
        }}
      />
    </Stack.Navigator>
  );
}
