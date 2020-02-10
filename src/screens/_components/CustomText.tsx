import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface Props {
  text: string;
  isBold?: boolean;
  style?: object;
}

export default function CustomText(props: Props) {
  return (
    <Text
      style={[styles.text, props.isBold ? { fontWeight: 'bold', fontSize: 24 } : null, props.style]}
    >
      {props.text}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14
  }
});
