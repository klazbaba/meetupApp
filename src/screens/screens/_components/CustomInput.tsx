import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import CustomText from './CustomText';

interface Props {
  label: string;
  style?: object;
}

export default function(props: Props) {
  return (
    <View style={props.style}>
      <CustomText text={props.label} />
      <TextInput style={styles.inputWrapper} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    borderWidth: 0.5,
    marginTop: 8,
    paddingHorizontal: 8,
    paddingTop: 0
  }
});
