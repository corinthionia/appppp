import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AUTH_NAVIGATIONS } from '~/constants';
import { Button } from '~/components';
import { AuthStackParamList } from '~/types';

type AuthHomeScreenProps = StackScreenProps<AuthStackParamList, typeof AUTH_NAVIGATIONS.AUTH_HOME>;

export default function AuthHomeScreen({ navigation }: AuthHomeScreenProps) {
  return (
    <SafeAreaView>
      <View>
        <Button
          variant="filled"
          label="로그인 하기"
          onPress={() => navigation.navigate(AUTH_NAVIGATIONS.LOGIN)}
        />
        <Button
          variant="outlined"
          label="회원가입 하기"
          onPress={() => navigation.navigate(AUTH_NAVIGATIONS.AUTH_HOME)}
        />
      </View>
    </SafeAreaView>
  );
}
