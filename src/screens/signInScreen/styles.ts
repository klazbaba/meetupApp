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
  noAccountWrapper: {
    marginTop: 32,
    flexDirection: 'row',
    alignSelf: 'center',
    flex: 1
  },
  signUpText: {
    color: colors.red,
    marginLeft: 8
  }
});
