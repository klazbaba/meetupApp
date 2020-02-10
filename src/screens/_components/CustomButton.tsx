import React from 'react';
import { Button } from 'native-base';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CustomText from './CustomText';
import { colors } from '../../colors';

interface Props {
  label: string;
  style?: object;
  onPress: () => void;
}

export default function CustomButton(props: Props) {
  return (
    <LinearGradient
      colors={[colors.lightred, colors.red]}
      style={styles.wrapper}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Button style={styles.buttonWrapper} onPress={props.onPress}>
        <CustomText text={props.label} style={styles.label} />
      </Button>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 8,
    marginTop: 32
  },
  label: {
    color: colors.white
  },
  buttonWrapper: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    borderColor: 'transparent',
    elevation: 0
  }
});
