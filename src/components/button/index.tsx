import React from 'react';
import { Dimensions, Pressable, PressableProps, StyleSheet, Text } from 'react-native';
import { COLORS } from '~/constants';

interface Props extends PressableProps {
  label: string;
  variant?: 'filled' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  invalid?: boolean;
}

// ios에서는 같지만 android에서는 다르다 - 상태표시줄 때문
const DEVICE_HEIGHT = Dimensions.get('screen').height;

export default function Button({
  label,
  variant = 'filled',
  size = 'medium',
  invalid = false,
  ...props
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        styles[size],
        pressed ? styles[`${variant}Pressed`] : styles[variant],
        invalid && styles.invalid,
      ]}
      disabled={invalid}
      {...props}
    >
      <Text style={(styles.text, styles[`${variant}Text`])}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  invalid: {
    opacity: 0.5,
  },
  filled: {
    backgroundColor: COLORS.orange400,
  },
  outlined: {
    borderWidth: 1,
    borderColor: COLORS.orange400,
  },
  filledPressed: {
    backgroundColor: COLORS.orange500,
  },
  outlinedPressed: {
    borderWidth: 1,
    borderColor: COLORS.orange400,
    opacity: 0.5,
  },
  small: {
    width: '30%',
    paddingVertical: 5,
  },
  medium: {
    width: '50%',
    paddingVertical: DEVICE_HEIGHT > 700 ? 10 : 8,
  },
  large: {
    width: '100%',
    paddingVertical: DEVICE_HEIGHT > 700 ? 15 : 12,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
  },
  filledText: {
    color: COLORS.white,
  },
  outlinedText: {
    color: COLORS.orange400,
  },
});
