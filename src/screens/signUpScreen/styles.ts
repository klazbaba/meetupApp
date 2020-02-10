import { StyleSheet } from 'react-native';

import { colors } from '../../colors';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    padding: 40
  },
  boldText: {
    marginTop: 64,
    marginBottom: 32
  },
  checkRow: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'flex-end'
  },
  checkBox: {
    left: 0,
    marginRight: 8
  },
  button: {
    flex: 1
  },
  bottomComponent: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  signInText: {
    color: colors.red,
    marginLeft: 8
  }
});
