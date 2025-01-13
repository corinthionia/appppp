import React from 'react';
import { Button, SafeAreaView, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

export default function AuthHomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView>
      <View>
        <Button title="로그인 화면으로 이동" onPress={() => navigation.navigate('Login')} />
      </View>
    </SafeAreaView>
  );
}
