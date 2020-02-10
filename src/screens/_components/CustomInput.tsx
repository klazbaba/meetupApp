import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

import CustomText from './CustomText';

import { colors } from '../../colors';

interface Props {
  label: string;
  style?: object;
  isPin?: boolean;
  keyboardType: string;
  showError?: boolean;
}

export default function(props: Props) {
  return (
    <View style={props.style}>
      <View style={styles.labelRow}>
        <CustomText text={props.label} style={{ color: props.showError ? colors.red : null }} />
        {props.showError ? (
          <CustomText text='Wrong pin. Please try again' style={styles.wrongPin} />
        ) : null}
      </View>

      <View style={styles.row}>
        <TextInput style={styles.inputWrapper} keyboardType={props.keyboardType} />
        {props.isPin ? <Icon name='eye-off' style={styles.icon} /> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    paddingHorizontal: 8,
    paddingTop: 6,
    paddingBottom: 6,
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
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  wrongPin: {
    color: colors.red
  }
});
