import { StyleSheet } from 'react-native';

import { colors } from '../../colors';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    padding: 32
  },
  boldText: {
    marginTop: 64,
    marginBottom: 32
  },
  forgotPin: {
    alignSelf: 'flex-end',
    color: colors.red,
    marginTop: 8
  },
});
