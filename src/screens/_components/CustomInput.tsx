import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

import CustomText from './CustomText';
import { colors } from '../../colors';

interface Props {
  label: string;
  style?: object;
  isPin?: boolean;
}

export default function(props: Props) {
  return (
    <View style={props.style}>
      <CustomText text={props.label} />
      <View style={styles.row}>
        <TextInput style={styles.inputWrapper} />
        {props.isPin ? <Icon name='eye-off' style={styles.icon} /> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    paddingHorizontal: 8,
    paddingTop: 0,
    flex: 1
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    borderWidth: 0.5
  },
  icon: {
    color: colors.grey,
    marginRight: 8
  }
});
