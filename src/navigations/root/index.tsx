import React from 'react';
import { MainDrawerNavigator, AuthStackNavigator } from '~/navigations';

export default function RootNavigator() {
  const isLoggedIn = false;

  return <>{isLoggedIn ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
}
