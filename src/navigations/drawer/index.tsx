import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CalendarHomeScreen, FeedHomeScreen, MapHomeScreen } from '~/screens';

const Drawer = createDrawerNavigator();

export default function MainDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MapHome" component={MapHomeScreen} />
      <Drawer.Screen name="FeedHome" component={FeedHomeScreen} />
      <Drawer.Screen name="CalendarHome" component={CalendarHomeScreen} />
    </Drawer.Navigator>
  );
}
