import React from 'react';
import { Button, SafeAreaView, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AUTH_NAVIGATIONS } from '~/constants';
import { AuthStackParamList } from '~/types';

type AuthHomeScreenProps = StackScreenProps<AuthStackParamList, typeof AUTH_NAVIGATIONS.AUTH_HOME>;

export default function AuthHomeScreen({ navigation }: AuthHomeScreenProps) {
  return (
    <SafeAreaView>
      <View>
        <Button
          title="로그인 화면으로 이동"
          onPress={() => navigation.navigate(AUTH_NAVIGATIONS.LOGIN)}
        />
        <Button
          title="회원가입 화면으로 이동"
          onPress={() => navigation.navigate(AUTH_NAVIGATIONS.SIGN_UP)}
        />
      </View>
    </SafeAreaView>
  );
}
